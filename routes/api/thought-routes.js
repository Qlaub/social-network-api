const { 
  getAllThoughts, 
  getThoughtById, 
  createThought, 
  createReaction,
  updateThoughtById,
  deleteThought,
  deleteReaction
} = require('../../controllers/thought-controllers');

const router = require('express').Router();

router.route('/')
  .get(getAllThoughts)
  .post(createThought);

router.route('/:id')
  .get(getThoughtById)
  .post(createReaction)
  .put(updateThoughtById);

router.route('/:userId/:thoughtId')
  .delete(deleteThought);

router.route('/:userId/:thoughtId/:reactionId')
  .delete(deleteReaction);

module.exports = router;
