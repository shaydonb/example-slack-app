const { App, LogLevel, SocketModeReceiver } = require('@slack/bolt');
require('dotenv').config();

const app = new App({
    socketMode: true,
    appToken: process.env.SLACK_APP_TOKEN,
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET //Not required for socketMode: true, but does not harm if exists
});

(async () => {
    await app.start();
    //await app.start(process.env.PORT || '3000');
    console.log('Server is running on port '+process.env.PORT+'!');
})();

//Call a function that contains lab1 example - Hello World
var shortcuts = require(`./shortcuts.js`)
shortcuts.registerShortcuts(app);

//Call a function that contains lab2 example - Events
var commands = require(`./commands.js`)
commands.registerCommands(app);

var actions = require(`./actions.js`)
actions.registerActions(app);
