const { MessageEmbed } = require("discord.js")
const moment = require("moment")

module.exports = {
  name: "userinfo",
  aliases: ["whois", "user"],
  usage: "userinfo <MENTION>",
  description: "Get advance stats of given person or yourself",
  run: async (client, message, args) => {


    let user;

    if (!args[0]) {
      user = message.member;
    } else {


      if (isNaN(args[0])) return message.channel.send("ID Invalide")


      user = message.mentions.members.first() || await message.guild.members.fetch(args[0]).catch(err => { return message.channel.send(":x: Unable to find this Person") })
    }

    if (!user) {
      return message.channel.send("Je ne trouve pas cette personne")
    }


    //OPTIONS FOR STATUS

    let stat = {
      online: "https://emoji.gg/assets/emoji/9166_online.png",
      idle: "https://emoji.gg/assets/emoji/3929_idle.png",
      dnd: "https://emoji.gg/assets/emoji/2531_dnd.png",
      offline: "https://emoji.gg/assets/emoji/7445_status_offline.png"
    }

    //NOW BADGES
    let badges = await user.user.flags
    badges = await badges.toArray();

    let newbadges = [];
    badges.forEach(m => {
      newbadges.push(m.replace("_", " "))
    })

    let embed = new MessageEmbed()
      .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))

    //ACTIVITY
    let array = []
    if (user.user.presence.activities.length) {

      let data = user.user.presence.activities;

      for (let i = 0; i < data.length; i++) {
        let name = data[i].name || "None"
        let xname = data[i].details || "None"
        let zname = data[i].state || "None"
        let type = data[i].type

        array.push(`**${type}** : \`${name} : ${xname} : ${zname}\``)

        if (data[i].name === "Spotify") {
          embed.setThumbnail(`https://i.scdn.co/image/${data[i].assets.largeImage.replace("spotify:", "")}`)
        }

        embed.setDescription(array.join("\n"))

      }
    }

      //EMBED COLOR BASED ON member
      embed.setColor(user.displayHexColor === "#000000" ? "#ffffff" : user.displayHexColor)

      //OTHER STUFF 
      embed.setAuthor(user.user.tag, user.user.displayAvatarURL({ dynamic: true }))

      //CHECK IF USER HAVE NICKNAME
      if (user.nickname !== null) embed.addField("Pseudo", user.nickname)
      embed.addField("Rejoin le serveur à", moment(user.user.joinedAt).format("LLLL"))
        .addField("Compte crée", moment(user.user.createdAt).format("LLLL"))
        .addField("Information globale", `ID: \`${user.user.id}\`\nTag: ${user.user.discriminator}\nBot: ${user.user.bot}\nDeleted User: ${user.deleted}`)
        .addField("Badges de la hypesquad", newbadges.join(", ").toLowerCase() || "Aucun")
        .setFooter(user.user.presence.status, stat[user.user.presence.status])



      return message.channel.send(embed).catch(err => {
        return message.channel.send("Error : " + err)
      })



    }



  }