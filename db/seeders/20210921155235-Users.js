'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {userName: 'Demo User', email: 'demouser@gmail.com', hashedPassword: bcrypt.hashSync('P@ssw0rd', 10), createdAt: new Date(), updatedAt: new Date()},
      {userName: 'Michael Scott', email: 'mscott@gmail.com', hashedPassword: bcrypt.hashSync('P@ssw0rd', 10), createdAt: new Date(), updatedAt: new Date()},
      {userName: 'Kevin Malone', email: 'kmalone@gmail.com', hashedPassword: bcrypt.hashSync('P@ssw0rd', 10), createdAt: new Date(), updatedAt: new Date()},
      {userName: 'Jim Halpert', email: 'jhalpert@gmail.com', hashedPassword: bcrypt.hashSync('Pam2!', 10), createdAt: new Date(), updatedAt: new Date()},
      {userName: 'Pam Beesly', email: 'pbeesly@gmail.com', hashedPassword: bcrypt.hashSync('artSchool1!', 10), createdAt: new Date(), updatedAt: new Date()},
      {userName: 'Dwight Schrute', email: 'dschrute@gmail.com', hashedPassword: bcrypt.hashSync('beetsBears2@', 10), createdAt: new Date(), updatedAt: new Date()},
      {userName: 'Andy Bernard', email: 'abernard@gmail.com', hashedPassword: bcrypt.hashSync('Cornell9#', 10), createdAt: new Date(), updatedAt: new Date()},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, { truncate: true, restartIdentity: true , cascade: true });
  }
};
