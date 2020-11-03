show dbs
use test
show Collections

db.items.find({price:2000})

//deleting one item data frome data base
db.items.deleteOne({price:28000})

//deleting many items from database
db.items.deleteMany({price:20000})
