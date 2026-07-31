import { SlashCommandBuilder, EmbedBuilder, AttachmentBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('ip')
        .setDescription('Shows the Minecraft server information.'),

    async execute(interaction) {
        const logo = new AttachmentBuilder('./assets/infinitysmp.png');

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
                    name: '💬 Discord',
                    value: 'https://discord.gg/YOURINVITE',
                    inline: false,
                }
            )
            .setThumbnail('attachment://infinitysmp.png')
            .setFooter({ text: 'InfinitySMP' })
            .setTimestamp();

        await interaction.reply({
            embeds: [embed],
            files: [logo],
        });
    },
};
