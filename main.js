const Discord = require("discord.js");
const client = new Discord.Client()

var prefix = '*'
var token = 'NTAzMjUzMzcwNjk0NDAyMDQ4.DvOBrA.p2KIFofKopR4ATw_rVCwsz32AQ4'
client.on("ready", function() {
	console.log("Ваш клиент запущен! Neurax was succesfully turned on!✅")
})

client.on("message", message =>{
	if(message.content.startsWith(prefix + "about"))
	message.channel.send("``Это тестовый бот Neurax от сервера DragonForce! Не судите строго,мы еще в БЕТА!``  https://discord.gg/9A9GB7Q");
	if(message.content.startsWith(prefix + "fuck"))
	message.reply("Послал Ваш Сервер");
	  const args = message.content.slice(prefix.length).trim().split(/ +/g);
          const command = args.shift().toLowerCase();
 if(message.content.startsWith("Купить бота"))
message.channel.send({embed: {
  color: 0xff0000,
  description: "**Чтобы купить бота нужно написать ОВНЕРУ в ЛС!   💰**"
  
  }});
if(message.content.startsWith(prefix + "info"))
message.member.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Бета Бот!",
    url: "https://dragonforce.simdif.com",
    description: "**Не судите за неграмотность :( !Создатель бота с Украины!**",
    fields: [{
        name: "Друзья",
        value: "**Здесь мы рады всем!!!**"
      },
      {
        name: "VK",
        value: "**Хотишь в сообщество Драгов?[Тогда тыкай сюда!](http://vk.com/dragonforce_discord)**"
      },
      {
        name: "Public",
        value: "**Мы не выкладываем бота на продажу!Он настроен только под сервер `DragonForce`**!"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: ("https://orig00.deviantart.net/db99/f/2012/053/6/8/fury_logo_by_masfx-d4qlxo0.png"),
      text: "RedFury#2354"
    }
  }
});
	
if(message.content.startsWith(prefix + "info"))
message.channel.send("**Хей!Посмотри в свой ЛС! 📧**");
	
	client.user.setActivity('вместе с RedFury#2354', { type: 'WATCHING' })
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'Сообщество большых людей'}`))
  .catch(console.error);
	
	// Set the client user's status
client.user.setStatus('dnd')
 .then(console.log)
.catch(console.error);
if(message.content.startsWith(prefix + "invite"))
message.member.send({embed: {
  color: 0xff0000,
  description: "**Инвайт на бота [Neurax!](https://discordapp.com/oauth2/authorize?client_id=503253370694402048&scope=bot&permissions=1878392257)**"
  
  }});
if(message.content.startsWith(prefix + "invite"))
message.channel.send("**Инвайт на меня уже у тебя в ЛС!**");
if(message.content.startsWith(prefix + "myavatar"))
message.channel.send(`${message.author.avatarURL}`);
	
if(message.content.startsWith(prefix + "gavatar"))
message.channel.send(`${message.guild.iconURL}?size=2048`);
	
	
if (message.content.startsWith("test"))
	var embed = new Discord.RichEmbed()
  .setTitle("NOOOOOIOOOOOOOOT")
  .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("LOOOOOOOOOOOL")
  .setFooter("Футер", "http://i.imgur.com/w1vhFSR.png")
  .setImage(`${message.guild.iconURL}?size=2048`)
  .setThumbnail("http://i.imgur.com/p2qNFag.png")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("http://neurax.ml")
  .addField("NOOOOOOO",
    "HEEEEEEEEELP")
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("FALLLLLLLLSE", "Keeeeeeeeeeeeeeep", true)
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("Private", `Ето только для сервера **${message.guild.name}!**`, true);
 
  message.channel.send(embed);
if(message.content.startsWith("Wink"))
message.react("519140915558744064");

if(message.content.startsWith(prefix + "say")){
  let text = args.join(" ");
  message.delete();
  message.channel.send(text);
}

	
else if (message.content.startsWith(prefix + "args")) {
    if (!args.length) {
        return message.channel.send(`Здесь нет аргументов, ${message.author}!`);
    }

    message.channel.send(`Command name: ${command}\nArguments: ${args}`);
}
if(message.content.startsWith(prefix + "kick")) {
  let member = message.mentions.members.first();
  let reason = args.slice(1).join(" ");
  member.kick(reason);
message.channel.send("**Удачно кикнут!**");
}

if(message.content.startsWith(prefix + "say2")){
  let text2 = args.join(" ");
  message.delete();
  message.channel.send(`Hello ${text2}`);
}
	
	
	
	
	
	
	
	
	
	
})
client.login(token);
