var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
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
        //console.log(res);
        console.log("=================================");
        for (i = 0; i < res.length; i++){
            console.log("Item ID: " + res[i].item_id);
            console.log(res[i].product_name);
            console.log("listed in " + res[i].department_name);
            console.log("Retail price is $" + res[i].price);
            console.log("There are " + res[i].stock_quantity + " left in stock.");
            console.log("=================================");
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
        console.log(answer);
        var query = "SELECT item_id, stock_quantity FROM products WHERE ?";
        connection.query(query, [answer.item_id, answer.stock_quantity], function (err, res){
            if (err) throw err;
            

        })
    })
}

