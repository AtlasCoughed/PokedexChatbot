/**
 * Created by miketran on 2/8/17.
 */
const config = require('./config.js');
const restify = require('restify');
const builder = require('botbuilder');

// Connection to Microsoft Bot Framework
const connector = new builder.ChatConnector({
    appId: config.appId,
    appPassword: config.appPassword
});
const bot = new builder.UniversalBot(connector);
// Event when Message received
bot.dialog('/', (session) => {
    console.log(session.message.text)
})

// Server Init
const server = restify.createServer();
server.listen(8080)
server.post('/', connector.listen());