const { User } = require('../models');

const userController = {
  // get all users
  getAllUsers(req, res) {
    User.find({})
      .select('-__v')
      .sort('username')
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // get single user by _id
  // populated thought and friend data included

  // post new user

  // put update user by _id

  // delete user by _id
};

module.exports = userController;
