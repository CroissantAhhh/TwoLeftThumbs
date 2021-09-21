'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Questions', [
        {title:"My Gunpowder/Creeper Farm on Minecraft isn't working", body:"I caught a Smeargle today following a photo bomb with my Lock-On / Focus Blast Registeel. The Smeargle I caught, to my surprise, knew Astonish / Focus Blast, not Lock-On. Why did Smeargle not Sketch Lock-On, and can this happen to any other moves - in other words, why does Smeargle not Sketch a move? My assumption at the moment is that it cannot learn moves introduced to Pokemon Go after Sketch such as Lock-On, and Transform. However, I couldn't find any information online to support or deny this, and I am somewhat surprised that Niantic didn't make moves introduced after Sketch like Lock-On learnable. It could be a bug.", userId:1, createdAt: new Date(), updatedAt: new Date()},
        {title:"Is Minecraft Bedrock Edition backwards compatible with minor versions?", body:"For example, a client with version 1.17.1 tries to join a server running version 1.17.0 - does this work? What about the other way around?", userId: 2, createdAt: new Date(), updatedAt: new Date()},
        {title:"How to beat last boss in regalia of men and monarchs?", body:"I am playing on normal mode, so I cannot skip battles, I finally managed to get to the end of the game but the last boss is brutal.", userId: 2, createdAt: new Date(), updatedAt: new Date()},
        {title:"What is this grey status effect in Dark Souls Remastered?", body:"I looked up the status effect symbols for Dark Souls Remastered, but the wiki doesn't have it. For reference, even if I remove all armor, rings, and weapons, it persists. Otherwise, I wear Marvelous Chester's set, and use a +15 Iaito, a +10 Fire Gargoyle's Halberd, the Grass Crest Shield, Havel's Ring, and the Ring of Steel Protection. What is that grey oval symbol?", userId: 1, createdAt: new Date(), updatedAt: new Date()},
        {title:"Are lives and coins saved after a reset?", body:"1:In some Mario games, extra lives get reset after saving the game and reloading your file. (Mario 64, Galaxy, etc) In Super Mario Land 2: 6 Golden Coins, will my extra lives and coins be saved if I reset my console and reload my save file?", userId: 1, createdAt: new Date(), updatedAt: new Date()},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Questions', null, {});
  }
};
