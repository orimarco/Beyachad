var mongoose = require('mongoose');
var UserBuylist = mongoose.Schema;

// create a schema
var userBuylistSchema = new UserBuylist({
  userId: Number,
  buylist: Array
});

// on every save, add the date
userBuylistSchema.pre('save', function (next) {
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
var UserBuylist = mongoose.model('UserBuylist', userBuylistSchema);

// make schema available for the Node application
module.exports = UserBuylist;
