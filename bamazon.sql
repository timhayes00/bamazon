DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;
USE bamazonDB;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(60) NOT NULL,
  department_name VARCHAR(60) NOT NULL,
  price INT(7) NOT NULL,
  stock_quantity INT(7) NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Iams dog food", "Pet products", 29, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Large Kong", "Pet products", 12, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Large Furminator", "Pet products", 49, 23);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Five Star PBW - 1lb", "Chemical supplies", 11, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Five Star Star-San 32oz", "Chemical supplies", 28, 0);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pale Ale Malt 55lbs", "Brewing supplies", 50, 17);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Centennial Hop pellets - 8oz", "Brewing supplies", 12, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cascade Hop pellets - 1lb", "Brewing supplies", 14, 9);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("64GB Flash Drive", "Electronics", 32, 16);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Yeti 30oz Tumbler", "Home & Kitchen", 18, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Meat Thermometer", "Home & Kitchen", 12, 307);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Assorted Cutlery Set", "Home & Kitchen", 8, 47);
