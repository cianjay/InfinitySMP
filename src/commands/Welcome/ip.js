onst { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'ip',
    description: 'Shows the Minecraft server IP.',
    execute(message) {

        const embed = new EmbedBuilder()
            .setColor('#2ECC71')
            .setTitle('🌍 InfinitySMP | Server Information')
            .addFields(
                {
                    name: '📡 Server IP',
                    value: '```Coming Soon```',
                },
                {
                    name: '🎮 Server Version',
                    value: '```1.21.11```',
                    inline: true,
                },
                {
                    name: '📢 Status',
                    value: '```Coming Soon```',
                    inline: true,
                },
                {
                    name: '💬 Information',
                    value: 'The official server IP will be announced soon. Stay tuned!',
                }
            )
            .setFooter({
                text: 'InfinitySMP',
            })
            .setTimestamp();

        message.channel.send({ embeds: [embed] });
    },
};
