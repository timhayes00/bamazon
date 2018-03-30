# bamazon
Cloning some of the functions of Amazon as an intro to mySQL.

Fairly straightforward, the JS Node code is attached to a database (bamazonDB).  I wrote a schema to populate the database with a dozen items, along with their price, department, etc.  Once the connection to the database is established, the customer is displayed the items that are in stock.

They are then asked to type in the product ID number of the product they are interested in, along with the quantity they wish to purchase.  If they want to purchase more than the amount in stock, they are told that isnt possible, and returned to the beginning of the purchase portion.  If they select a number less than or equal to the amount in stock of their selected item, it is added to their cart and they are given an updated total.  That number of the selected item is then removed from the database.

See the screencastify video in this repository for a walktrhrough.