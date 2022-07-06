const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  createFriend,

} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);


// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(createFriend);



module.exports = router;
