/**
 * Player.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
        type: 'text',
        required: true
    },
    email: {
        type: 'email',
        required: true
    },
    password: {
        type: 'string',
        required: true
    },
    username: {
        type: 'string',
        required: true,
        size: 15,
        primaryKey: true
    },
    friends: {
      type: 'array',
      required: false
    },
    points: {
      type: 'integer',
      required: false
    }
  }
};
