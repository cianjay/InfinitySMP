const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'ip',
    description: 'Displays the Minecraft server information.',

    async execute(message) {

        const embed = new EmbedBuilder()
            .setColor('#3BA55D')
            .setTitle('🌍 InfinitySMP | Server Information')
            .setDescription('Join **InfinitySMP** and start your adventure!')
            .addFields(
                {
                    name: '📡 Server IP',
                    value: '```Coming Soon```',
                    inline: false,
                },
                {
                    name: '🔌 Port',
                    value: '```25565```',
                    inline: true,
                },
                {
                    name: '🎮 Version',
                    value: '```1.21.11```',
                    inline: true,
                },
                {
                    name: '🖥️ Platform',
                    value: '```Java Edition```',
                    inline: true,
                },
                {
                    name: '📢 Status',
                    value: '```🟡 Coming Soon```',
                    inline: false,
                },
                {
                    name: '✨ Features',
                    value:
                        '• Survival\n' +
                        '• Economy\n' +
                        '• Crates\n' +
                        '• PvP\n' +
                        '• Player Shops\n' +
                        '• Events',
                    inline: false,
                },
                {
                    name: '💬 Discord',
                    value: 'https://discord.gg/YOURINVITE',
                    inline: false,
                }
            )
            .setThumbnail('https://mc-heads.net/avatar/Steve')
            .setFooter({
                text: 'InfinitySMP',
            })
            .setTimestamp();

        await message.reply({ embeds: [embed] });
    },
};
