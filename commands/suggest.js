const { execute } = require("./genderreactionrole");

module.exports = {
    name: 'suggest',
    aliases: ['suggestions', 'suggestions'],
    permissions: [],
    description: 'Creates a Suggestion',
    execute(message, args, cmd, client, Discord){
        const channel = message.guild.channels.cache.find(c => c.name === 'suggestion');
        if(!channel) return message.channel.send('There is no channel called Suggestions! Please ask the admin or Dev!');

    }
}