//Inserting Data into Mongodb
use Test

db.items.find({rating:4.5})

db.items.find({rating:{$gte:2.0}}) //using grester than operater to search queary

db.items.find({rating:{$gt:2.0}, price:{$gt:1000}}) //using and operator by , 

db.items.find({rating:{$lt:3.0}}) //using lessr than operator by $lt

db.items.find({   $or:[  { rating:{$lt:2.0} }, { price:{$gt:1000} }  ]   }) //using or operator by 