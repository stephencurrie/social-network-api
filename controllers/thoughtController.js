const { ObjectId } = require('mongoose').Types;
const { Thought, User } = require('../models');



module.exports = {
  // Get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then(async (thoughts) => {
        const thoughtObj = {
          thoughts,
        };
        return res.json(thoughtObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // Get a single thought
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then(async (thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json({
              thought
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // create a new thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thoughtData) => {
        return User.findOneAndUpdate({_id:req.body.userId}, {$push:{thoughts: thoughtData._id}}, {new: true})
      })
      .then((userData) => {
        if (!userData)
            res.status(404).json({ message: 'thought created, but no user found' })

        res.json({ message: 'Thought created' })
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err)});
  },

  // update a thought
  updateThought(req, res) {
    Thought.findOneAndUpdate({ _id: req.params.thoughtId },
        {$set:req.body},
        {runValidators: true, new: true})
      .select('-__v')
      .then(async (thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },


// delete a thought

  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId },

        {runValidators: true, new: true})
      .select('-__v')
      .then(async (thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },


  createReaction(req, res) {

    Thought.findOneAndUpdate({ _id: req.params.thoughtId },
        {$addToSet:{reactions:req.body}},
        {new: true})
      
      .then(async (thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

// delete a reaction

  deleteReaction(req, res) {

    Thought.findOneAndUpdate({ _id: req.params.thoughtId },

        {$pull: {reactions: {reactionId: req.params.reactionId}}},
        {new: true})
      
      .then(async (thought) =>
        !thought
          ? res.status(404).json({ message: 'No reaction with that ID' })
          : res.json(thought)
          
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });

  },

};
