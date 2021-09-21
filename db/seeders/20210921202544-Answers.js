'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Answers', [
      { body: 'get good', userId: 1, questionId: 1, createdAt: new Date(), updatedAt: new Date() },
      { body: 'try this instead', userId: 1, questionId: 1, createdAt: new Date(), updatedAt: new Date() },
      { body: 'you can find this equipment here, that might help', userId: 1, questionId: 1, createdAt: new Date(), updatedAt: new Date() },
      { body: 'consider a different approach', userId: 1, questionId: 1, createdAt: new Date(), updatedAt: new Date() },
      { body: 'bump', userId: 1, questionId: 1, createdAt: new Date(), updatedAt: new Date() },
      { body: 'Using this weapon instead is good against that enemy', userId: 5, questionId: 1, createdAt: new Date(), updatedAt: new Date() },
      { body: 'try this instead', userId: 4, questionId: 5, createdAt: new Date(), updatedAt: new Date() },
      { body: 'you can find this equipment here, that might help', userId: 6, questionId: 7, createdAt: new Date(), updatedAt: new Date() },
      { body: 'consider a different approach', userId: 2, questionId: 6, createdAt: new Date(), updatedAt: new Date() },
      { body: 'bump', userId: 6, questionId: 4, createdAt: new Date(), updatedAt: new Date() },
      { body: 'Using this weapon instead is good against that enemy', userId: 6, questionId: 5, createdAt: new Date(), updatedAt: new Date() },
      { body: 'get good', userId: 3, questionId: 15, createdAt: new Date(), updatedAt: new Date() },
      { body: 'try this instead', userId: 5, questionId: 12, createdAt: new Date(), updatedAt: new Date() },
      { body: 'you can find this equipment here, that might help', userId: 3, questionId: 11, createdAt: new Date(), updatedAt: new Date() },
      { body: 'get good', userId: 1, questionId: 13, createdAt: new Date(), updatedAt: new Date() },
      { body: 'consider a different approach', userId: 4, questionId: 14, createdAt: new Date(), updatedAt: new Date() },
      { body: 'bump', userId: 5, questionId: 8, createdAt: new Date(), updatedAt: new Date() },
      { body: 'Using this weapon instead is good against that enemy', userId: 4, questionId: 7, createdAt: new Date(), updatedAt: new Date() },
      { body: 'get good', userId: 2, questionId: 4, createdAt: new Date(), updatedAt: new Date() },
      { body: 'try this instead', userId: 5, questionId: 7, createdAt: new Date(), updatedAt: new Date() },
      { body: 'you can find this equipment here, that might help', userId: 4, questionId: 11, createdAt: new Date(), updatedAt: new Date() },
      { body: 'consider a different approach', userId: 5, questionId: 5, createdAt: new Date(), updatedAt: new Date() },
      { body: 'bump', userId: 5, questionId: 9, createdAt: new Date(), updatedAt: new Date() },
      { body: 'Using this weapon instead is good against that enemy', userId: 5, questionId: 8, createdAt: new Date(), updatedAt: new Date() },
      { body: 'get good', userId: 6, questionId: 10, createdAt: new Date(), updatedAt: new Date() },
      { body: 'try this instead', userId: 3, questionId: 12, createdAt: new Date(), updatedAt: new Date() },
      { body: 'you can find this equipment here, that might help', userId: 5, questionId: 14, createdAt: new Date(), updatedAt: new Date() },
      { body: 'consider a different approach', userId: 4, questionId: 11, createdAt: new Date(), updatedAt: new Date() },
      { body: 'bump', userId: 3, questionId: 13, createdAt: new Date(), updatedAt: new Date() },
      { body: 'Using this weapon instead is good against that enemy', userId: 6, questionId: 15, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Answers', null, {});
  }
};
