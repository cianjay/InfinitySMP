import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('ip')
        .setDescription('Displays the InfinitySMP server information.'),

    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setColor('#57F287')
            .setTitle('🌍 InfinitySMP')
            .setDescription('**Everything you need to join InfinitySMP!**')
            .addFields(
                {
                    name: '📡 Server IP',
                    value: '```Coming Soon```',
                    inline: false,
                },
                {
                    name: '🔌 Port',
                    value: '```Coming Soon```',
                    inline: true,
                },
                {
                    name: '🎮 Version',
                    value: '```1.21.11```',
                    inline: true,
                },
                {
                    name: '🖥️ Platform',
                    value: '```Java & Bedrock```',
                    inline: true,
                },
                {
                    name: '📢 Server Status',
                    value: '```🟡 Coming Soon```',
                    inline: false,
                },
                {
                    name: '💬 Discord',
                    value: 'https://discord.gg/Yq4cpazWpe',
                    inline: false,
                }
            )
            .setFooter({
                text: 'InfinitySMP • See you in-game!',
            })
            .setTimestamp();

        await interaction.reply({
            embeds: [embed],
        });
    },
};
