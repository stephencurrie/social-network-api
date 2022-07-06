const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);


// /api/thought/:thoughtId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought).put(updateThought);

///api/thoughts/:thoughtId/reactions/
// for delete add the reaction id at the end
router.route('/:thoughtId/reactions').post(createReaction);

module.exports = router;