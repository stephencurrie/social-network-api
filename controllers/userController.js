const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');



module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find()
      .then(async (users) => {
        const userObj = {
          users,
        };
        return res.json(userObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // Get a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json({
              user
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  // update a user
  updateUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId },
        {$set:req.body},
        {runValidators: true, new: true})
      .select('-__v')
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // delete a user

  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId },

        {runValidators: true, new: true})
      .select('-__v')
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

   // create a friend  

    createFriend(req, res) {

        User.findOneAndUpdate({ _id: req.params.userId },
            {$addToSet:{friends:req.params.friendId}},
            {new: true})
          
          .then(async (user) =>
            !user
              ? res.status(404).json({ message: 'No friend with that ID' })
              : res.json(user)
          )
          .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
      },

      // delete friend

      deleteFriend(req, res) {

        User.findOneAndUpdate({ _id: req.params.userId },
            {$pull:{friends:req.params.friendId}},
            {new: true})
          
          .then(async (user) =>
            !user
              ? res.status(404).json({ message: 'No friend with that ID' })
              : res.json(user)
          )
          .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
      },

};
