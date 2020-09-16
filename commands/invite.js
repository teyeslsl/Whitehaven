const {MessageEmbed} = require("discord.js");
module.exports={
    name: 'invite',
    category: 'Music',
    timeout: 5000,
    description: "test embed",
    run: async(bot,message, args)=>{
        const embed = new MessageEmbed()
        .setColor("#13E828")
        .setTitle("Voici mon invitation (Ce bot est publique ce qui signifie que vous pouvez l'utiliser sur votre serveur sans aucune autorisation)")
        .setDescription("https://discord.com/api/oauth2/authorize?client_id=754669841738235917&permissions=8&scope=bot")
        .setThumbnail(message.author.displayAvatarURL)
        .setImage("https://media1.giphy.com/media/xUPGcyMM1DhdFRmvdu/giphy.gif?cid=3640f6095bae5c195076705141e0540e")
        .setFooter("discord.gg/WhiteHaven")
        message.channel.send(embed)
    } 
}
