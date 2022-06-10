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
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .populate(
        {
          path: 'thoughts',
          select: '-__v'
        },
        {
          path: 'friends',
          select: '-__v'
        }
      )
      .select('-__v')
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(400).json({ message: 'No user found with this id.' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // post new user
  createUser({ body }, res) {
    User.create(body)
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.status(400).json(err));
  }

  // put update user by _id

  // delete user by _id
};

module.exports = userController;
