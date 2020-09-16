
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

let Staff = ["754669841738235917", "741630376816017442", "731201622301999124"];
        if (Staff.includes(message.author.id)) {

let args = message.content.split(" ").slice(1);
      if (!args[0]) return message.reply("Merci de préciser mon nouveau statut.");
         let StreamTime = args.slice(0).join(" ");
          client.user.setActivity(`${StreamTime}`, {type: "STREAMING", url: 'https://www.twitch.tv/CrowBot'});      
message.channel.send(`Je stream maintenant **${StreamTime}**`)
      } else {

message.channel.send("  ")
   }
}

module.exports.help = {
    name: "stream"
}