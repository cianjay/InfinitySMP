import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

const ROLE_ID = '1528282130080071690';

export default {
    data: new SlashCommandBuilder()
        .setName('gcash')
        .setDescription('Shows the GCash payment information.'),

    async execute(interaction) {
        // Check if the user has the required role
        if (!interaction.member.roles.cache.has(ROLE_ID)) {
            return interaction.reply({
                content: '❌ You do not have permission to use this command.',
                ephemeral: true,
            });
        }

        const embed = new EmbedBuilder()
            .setColor('#0066FF')
            .setTitle('💙 GCash Payment')
            .setDescription('Thank you for supporting InfinitySMP!')
            .addFields(
                {
                    name: '📱 GCash Number',
                    value: '`09XX XXX XXXX`',
                    inline: false,
                },
                {
                    name: '👤 Account Name',
                    value: '`Your Name`',
                    inline: false,
                },
                {
                    name: '📝 Note',
                    value: 'Include your Minecraft username after sending your payment. (Make sure to send a screenshot of your payment as proof.)',
                    inline: false,
                }
            )
            .setFooter({ text: 'InfinitySMP Store' })
            .setTimestamp();

        await interaction.reply({
            embeds: [embed],
            ephemeral: true,
        });
    },
};
