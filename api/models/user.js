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
