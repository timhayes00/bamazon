var mysql = require("mysql");
var inquirer = require("inquirer");
var cartTotal = 0;

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username, password
  user: "root",
  password: "root",
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  displayItems();
});

function displayItems(){
    var query = "SELECT * FROM products";
    connection.query(query, function(err, res){
        if (err) throw err;
        console.log("================================="); //header
        for (i = 0; i < res.length; i++){
            console.log("Item ID: " + res[i].item_id);
            console.log(res[i].product_name);
            console.log("listed in " + res[i].department_name);
            console.log("Retail price is $" + res[i].price);
            console.log("There are " + res[i].stock_quantity + " left in stock.");
            console.log("================================="); // separation between items and the footer
        }
        purchaseItems();
    })
}

function purchaseItems(){
    inquirer
    .prompt([
        {
         name: "item_id",
         type: "input",
         message: "Please enter the Item ID of what you would like to buy today.",
        },
        {
         name: "quantity",
         type: "input",
         message: "How many would you like to purchase?",
        }
    ])
    .then(function(answer){
        var query = "SELECT item_id, stock_quantity, price FROM products WHERE ?";
        connection.query(query, { item_id: answer.item_id }, function (err, res){
            if (err) throw err;
            if (res[0].stock_quantity >= answer.quantity) {
                cartTotal += answer.quantity * res[0].price;
                console.log("Your total is $" + cartTotal);
                var remainingStock = res[0].stock_quantity - answer.quantity;
                connection.query(                    
                    "UPDATE products SET ? WHERE ?",
                    [
                        {
                            stock_quantity: remainingStock
                        },
                        {
                            item_id: answer.item_id
                        }
                    ]),
                    function(error) {
                        if (error) throw error;
                        //if there's no error, let the customer know their order has been placed
                        console.log("Order has been placed.");
                    }
            }
            else{
                //
                console.log("Insufficient quantity!");
                console.log("In any event, your total is $" + cartTotal);
            }
            purchaseItems();
        });
    })
}
