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
    })
}