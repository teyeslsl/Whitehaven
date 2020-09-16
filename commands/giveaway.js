const { MessageEmbed } = require("discord.js");
const ms = require("ms");
module.exports = {
  name: "giveaway",
  description: "Create a simple giveaway",
  usage: "<time> <channel> <prize>",
  category: "fun",
  run: async (bot, message, args) => {
    if (!args[0]) return message.channel.send(`Tu n'as pas donner un temps!`);
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m")
    )
      return message.channel.send(
        `Veuillez donnez le bon format du temps!`
      );
    if (isNaN(args[0][0])) return message.channel.send(`Ceci n'est pas un nombre corect`);
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(
        `Je n'ai pas pu trouver ce salon dans le serveur!`
      );
    let prize = args.slice(2).join(" ");
    if (!prize) return message.channel.send(`Veuillez inclure un prix`);
    message.channel.send(`*Giveaway lancé dans ${channel}*`);
    let Embed = new MessageEmbed()
      .setTitle(`GIVEAWAY! <a:Giveaway:755396040928002169>`)
      .setDescription( `Cliquez sur la réaction suivante "🎉"  pour tenter de gagner  **${prize}**`)
      .setTimestamp(Date.now() + ms(args[0]))
      .setColor(`BLUE`);
    let m = await channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        message.channel.send(`Reactions: ${m.reactions.cache.get("🎉").count}`);
        return message.channel.send(
          `Pas assez de personne ont réagis, je n'ai pas pu definir les gagnant!`
        );
      }

      let winner = m.reactions.cache
        .get("🎉")
        .users.cache.filter((u) => !u.bot)
        .random();
      channel.send(
        `Le gagnant de  **${prize}** est... ${winner}`
      );
    }, ms(args[0]));
  },
};