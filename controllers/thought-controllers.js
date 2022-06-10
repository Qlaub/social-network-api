const { Thought } = require('../models');

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
  }

  // get a single by _id

  // post new thought

  // post create reaction to thought

  // put update thought by _id

  // delete thought by _id

  // delete reaction by reactionId
};

module.exports = thoughtController;
