var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  meals: String,
  roleType: String,
  shoppingRole: String,
  cookRole: String,
  roleTime: String,
  otherRole: String,
  hasCar: Boolean,
  courseName: String,
  created_at: Date,
  updated_at: Date
});
userSchema.methods.dudify = function () {
  // add some stuff to the users name
  this.name = this.name + '-dude';

  return this.name;
};

// on every save, add the date
userSchema.pre('save', function (next) {
  // get the current date
  var currentDate = new Date();

  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

//create model using schema
var User = mongoose.model('User', userSchema);

// make schema available for the Node application
module.exports = User;
