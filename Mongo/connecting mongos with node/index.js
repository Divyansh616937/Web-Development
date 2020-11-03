const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
});
const kittySchema = new mongoose.Schema({
  name: String
});
const Kitten = mongoose.model('Kitten', kittySchema);
const silence = new Kitten({ name: 'Silence' });
console.log(silence.name);
// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function () {
  const greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}

var Kitten0 = mongoose.model('Kitten', kittySchema);

var fluffy = new Kitten0({ name: 'fluffy' });
fluffy.speak();

fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
  fluffy.speak();
});
// Kitten0.find({ name: /^fluff/ }, callback);