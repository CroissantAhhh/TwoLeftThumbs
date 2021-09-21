'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {userName: 'Michael Scott', email: 'mscott@gmail.com', hashedPassword: bcrypt.hashSync('P@ssw0rd', 10), createdAt: new Date(), updatedAt: new Date()},
      {userName: 'Kevin Malone', email: 'kmalone@gmail.com', hashedPassword: bcrypt.hashSync('P@ssw0rd', 10), createdAt: new Date(), updatedAt: new Date()},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
