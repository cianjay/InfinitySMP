import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('ip')
        .setDescription('Shows the Minecraft server IP.'),

    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setColor('#3BA55D')
            .setTitle('🌍 InfinitySMP | Server Information')
            .setDescription('Join **InfinitySMP** and start your adventure!')
            .addFields(
                {
                    name: '📡 Server IP',
                    value: '```Coming Soon```',
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
                },
                {
                    name: '💬 Discord',
                    value: 'https://discord.gg/YOURINVITE',
                }
            )
            .setFooter({
                text: 'InfinitySMP',
            })
            .setTimestamp();

        await interaction.reply({
            embeds: [embed]
        });
    },
};
