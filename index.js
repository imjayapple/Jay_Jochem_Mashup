import dotenv from "dotenv"
dotenv.config()
import tmi from 'tmi.js'

//get the username from the ENV file
const channelName = process.env.TWITCH_CHANNEL
const accessToken = process.env.TWITCH_OAUTH

//create a new client to connect to the Twitch Chat
const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: channelName,
		password: `oauth:${accessToken}`
	},
	channels: [ channelName ]
});




//let the new client connect to the twitch chat
client.connect();

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

  if(message === '!ping'){
    client.say(channel, `pong @${tags["display-name"]}`)
  }


  
});
	


