// if our user.js file is at app/models/user.js
var User = require('../models/user.model');
var UserBuylist = require('../models/userbuylist.model');

module.exports = function (app) {
  app.post('/api/register', function (req, res) {
    // create a new user called chris
    var user = new User({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone
    });
    user.save(function (err) {
      if (err) throw err;
      console.log('User saved successfully!');
    });
    res.send('success');
  });

  app.post('/api/registerIngredients', function (req, res) {
    // create a new user called chris
    var userbuylist = new UserBuylist({
      userId: req.body.userId,
      buylist: req.body.buylist
    });
    userbuylist.save(function (err) {
      if (err) throw err;
      console.log('Buylist saved successfully!');
    });
    res.send('success');
  });

  app.get('/api/getIngredients', function (req, res) {
    var userbuylist = new UserBuylist({
      userId: req.body.userId,
      buylist: req.body.buylist
    });
    userbuylist.save(function (err) {
      if (err) throw err;
      console.log('Buylist saved successfully!');
    });
    res.json([{
      id: 1,
      name: 'עגבניה',
      unit: 'ק"ג'
    },
    {
      id: 2,
      name: 'פלפל',
      unit: 'ק"ג'
    },
    {
      id: 3,
      name: 'תבנית',
      unit: 'יחידות'
    }
    ])
  });
}
