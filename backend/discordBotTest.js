require('dotenv').config();


const schedule = require('node-schedule');
const Discord = require('discord.js');

const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const messageChannel = process.env.messageChannel;

bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong');
        msg.channel.send('pong');
    }
});


// takePhoto function to process photos being taken from the react website commands. 
function takePhoto(){
    const photoName = Date.now();
    console.log("The server took a photo!")
    console.log('Photo taken as:'+photoName+'.jpg')
    const channel = bot.channels.cache.get(messageChannel);
    channel.send('test')
    //bot.channels.fetch('general').send('Photo taken as:'+photoName+'.jpg');
}

// Create a Timer observer that checks to ensure that the time is in 30 min invervals. 
var rule = new schedule.RecurrenceRule();
rule.minute = [0,52,53,30,59];
// Create a Timer observer that checks to ensure that the time is in 30 min invervals. 
var scheduleJob = schedule.scheduleJob(rule, function(){
    console.log('Automatic Photo taken at' + Date.now());
    takePhoto();
});


