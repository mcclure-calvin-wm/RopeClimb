/**
 * Player.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    firstName: {
        type: 'text',
        required: true
    },
    lastName: {
      type: 'text',
      required: true
    },
    email: {
        type: 'email',
        email: true,
        required: true,
        unique: true
    },
    password: {
        type: 'string',
        required: true
    },
    username: {
        type: 'string',
        required: true,
        size: 15,
        unique: true,
    },
    friends: {
      type: 'array',
      required: false
    },
    points: {
      type: 'integer',
      required: true,
    }
  }
};
