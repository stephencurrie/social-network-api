const { Schema, model } = require('mongoose');

// Schema to create reaction model

const reactionSchema = new Schema(
    {
    // Set custom ID 
    reactionId: {
        type: Schema.Types.ObjectId,
        default: ()=> new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('lll')
    }
    },

    {
    toJSON: {
        getters: true
    } 
    }
);

// Schema to create thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
        createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('lll')
      },
        username: {
        type: String,
        required: true,
      },
      reactions: [reactionSchema]
      
    },
      
      {
        // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
        // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
        toJSON: {
          virtuals: true,
          getters: true,
        },
        id: false,
      },

  );





const Thought = model('thought', thoughtSchema);

module.exports = Thought;