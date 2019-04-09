// Import the discord.js module
const Discord = require('discord.js');
const client = new Discord.Client();
const profanities = require('profanities')

//shows if bot is ready
client.on('ready', () => {
  console.log('Bot Ready!');
});

//listner msg recieved
client.on('message', message => {

       var prefix = '-' //the bot prefix
       var msg = message.content.toUpperCase(); //turns message into upercars chars
       var sender = message.author; //sender

       //make sure bot isnt reading own message
       if (sender.id === '564994106686963722') {
           return;
       }



       //f command
       if (msg === prefix + 'F') {
           msg.channel.send('F')//sends f in chat in the same chanel '-f' was sent
       }

       //profanity
       for (x = 0; x < profanities.length; x++) {
           if (message.content.toUpperCase() == profanities[x].toUpperCase()) {
               message.delete();
               message.channel.send('Hey! Profanity is ***not*** allowed!')
               return;
           }
       }



});

//botlaunched listner
client.on('ready', () => {

    console.log('Bot Launched!')
})
//token
client.login('NTY0OTk0MTA2Njg2OTYzNzIy.XKwXmg.aVie-H06JJ3JabO6AgEYkIUvwSk');
