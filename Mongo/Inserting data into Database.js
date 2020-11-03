//Inserting Data into Mongodb
use Test

db.items.insertOne({name:"Nokia", price:2000, rating:4.5, qty:223, sold:98})

db.items.insertMany([{name:"Nokia", price:2000, rating:4.5, qty:223, sold:98}, {name:"Redmi", price:20000, rating:4.5, qty:223, sold:98}, {name:"Realmi", price:28000, rating:1.5, qty:500, sold:50} ])
    