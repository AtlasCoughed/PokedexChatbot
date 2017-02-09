/**
 * Created by miketran on 2/8/17.
 */
const config = require('./config.js');
const restify = require('restify');
const builder = require('botbuilder');
const recast = require('recastai');

// Connection to Microsoft Bot Framework
const connector = new builder.ChatConnector({
    appId: config.appId,
    appPassword: config.appPassword
});

const recastClient = new recast.Client(config.recast)

const bot = new builder.UniversalBot(connector);
// Event when Message received
bot.dialog('/', (session) => {
    recastClient.textRequest(session.message.text)
        .then(res => {
            const intent = res.intent();
            const entity = res.get('pokemon');
            session.send(`Intent: ${intent.slug}`)
            session.send(`Entity: ${entity.name}`)
        })
    .catch(() => session.send('I need some sleep right now... Talk to me later!'))
});

// Server Init
const server = restify.createServer();
server.listen(8080)
server.post('/', connector.listen());