const { Thought, User } = require('../models');

const thoughtController = {
  // get all thoughts
  getAllThoughts(req, res) {
    Thought.find({})
      .select('-__v')
      .sort('-createdAt')
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // get a single by _id
  getThoughtById({ params }, res) {
    Thought.findOneAndUpdate({ _id: params.id })
      .select('-__v')
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(400).json({ message: 'No thought found with this id.' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // post new thought
  createThought({ body }, res) {
    Thought.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: body.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(400).json({ message: 'No user found with this id.' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  }

  // post create reaction to thought

  // put update thought by _id

  // delete thought by _id

  // delete reaction by reactionId
};

module.exports = thoughtController;
