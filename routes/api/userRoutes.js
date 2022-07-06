const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
//   removeThoughts,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);
// router.route('/').get(getUsers);

// /api/users/:userId
// router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);
router.route('/:userId').get(getSingleUser).put(updateUser);


module.exports = router;
