const { User } = require('../models');

const userData = [
  {
    username: 'johnsmith123',
    email: 'johnsmith@gmail.com',
    password: 'password123',
  },
  {
    username: 'janedoe123',
    email: 'janedoe@yahoo.com',
    password: 'password123',
  },
  {
    username: 'sallysantana123',
    email: 'sallysantana@gmail.com',
    password: 'password123',
  },
  {
    username: 'harryjones123',
    email: 'harryjones@yahoo.com',
    password: 'password123',
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;