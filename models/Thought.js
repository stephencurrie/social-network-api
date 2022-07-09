const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

// Schema to create reaction model

const reactionSchema = new Schema(
    {
  //  Set custom ID 
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

        toJSON: {
          virtuals: true,
          getters: true,
        },
        id: false,
      },

  );

        // Create a virtual property `reactionCount` that retrieves the length of the thought's reactions array field on query
        thoughtSchema.virtual('reactionCount').get(function () {
            return this.reactions.length;
          });



const Thought = model('thought', thoughtSchema);

module.exports = Thought;