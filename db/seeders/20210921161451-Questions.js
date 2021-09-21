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
        {title:"Are lives and coins saved after a reset?", body:"1:In some Mario games, extra lives get reset after saving the game and reloading your file. (Mario 64, Galaxy, etc) In Super Mario Land 2: 6 Golden Coins, will my extra lives and coins be saved if I reset my console and reload my save file?", userId: 3, createdAt: new Date(), updatedAt: new Date()},
        {title:"How do I defeat Golem?", body:"I tried to cage Golem but it wouldn't work, because of the lasers it shoots. How do I evade/defend against the lasers? I am in the latest version of mobile. I've seen videos. In the videos the lasers disappear when it hits a block. For me, the lasers go through the block. What is an easier way of fighting it? What's an easier way to defeat it???", userId: 5, createdAt: new Date(), updatedAt: new Date()},
        {title:"How do you punch and eat a golden apple at the same time in Minecraft?", body:"I saw some people use a technique where they block with their sword AND punch the player at the same time. Also, those players also end up punching the player WHILE eating the golden apple, creating this weird animation where you punch and eat on the run, like what you see in Wifies's videos. Can this be possible in 1.17?", userId: 4, createdAt: new Date(), updatedAt: new Date()},
        {title:"Second Nether portal links back to original portal location in the Overworld", body:"I built a Nether portal in a village and one near spawn. The portals are about 5k blocks apart from each other. But if I go through to village portal, it takes me back to the main spawn portal instead of creating another one in the nether. I understand how portal linking works, I calculated the distance, and instead of the portal taking me into the exact same spot in the Overworld that I calculated, it just takes me back to the spawn portal. This server has no plugins. Would a plugin solve this? Or is there another way I can get this to work?", userId: 2, createdAt: new Date(), updatedAt: new Date()},
        {title:"Do strongholds spawn under abandoned villages?", body:"Strongholds have a 1/10 chance to spawn under a village; does this also apply to abandoned villages? If so, does the reason for abandonment have any impact to this statistic?", userId: 3, createdAt: new Date(), updatedAt: new Date()},
        {title:"Minecraft rcon tool for Linux Console", body:"I am searching for a Linux commandline tool to use the rcon to send Command to the minecraft server. While I found one in the Minecraft Forum it does not work as expected, most time the Auth Succeeds but the Command does not get executed and the programm quit in reading the results from the Server. Any hints for a working program, or how to fix the mentioned one?", userId: 1, createdAt: new Date(), updatedAt: new Date()},
        {title:"Is there a way to obtain Shiny Mewtwo in Let's Go without repeatedly reloading save files?", body:"In Let's Go, it seems that, as far as I know, Mewtwo is the only Pokémon that does not respawn (the legendary birds can be found in the wild). Since Mewtwo does not respawn, is there any way to obtain Shiny Mewtwo in Let's Go without reloading a save file hundreds/thousands of times, or is reloading a save file hundreds/thousands of times the only way to obtain it? Note: In the future, it will be possible to transfer a Shiny Mewtwo from Pokémon Go to Let's Go. I'm specifically asking this question in the context of Let's Go itself.", userId: 5, createdAt: new Date(), updatedAt: new Date()},
        {title:"How to know what player data belongs to which player in Realms?", body:"I have downloaded my Minecraft Realms world and can see the player data, but I don't know which ID belongs to which player. How can I link them?", userId: 4, createdAt: new Date(), updatedAt: new Date()},
        {title:"What are Private Servers?", body:"I have seen a couple questions recently asking about private servers for Clash of Clans. I looked them up online, and I can't find any information about them, only sites offering them. What are these private servers? Are they even legitimate?", userId: 1, createdAt: new Date(), updatedAt: new Date()},
        {title:"How to call emergency meeting on the Submerged map?", body:"Unlike on other maps, pressing the Emergency Meeting button in the meeting room on the Submerged map shows a message \"Waiting for host\" in the box below the button, and no meeting is called. Is there something that needs to be done to enable the emergency meeting, or is it a bug, or a missing/incomplete feature? Searching on Google yielded nothing of substance, and none of the videos about the new map I found seem to mention calling emergency meetings.", userId: 4, createdAt: new Date(), updatedAt: new Date()},
        {title:"I'm 2 to 3 hours into The Witcher 3 and drowners are impossible to kill. What am I doing wrong?", body:"I figure that I am doing something wrong, because most of the Drowners that I find take nearly zero damage from my sword, and the only way to kill them is to dodge until Igni reloads. Is that normal? Maybe I'm doing something wrong. The game isn't as fun because of that", userId: 3, createdAt: new Date(), updatedAt: new Date()},
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
