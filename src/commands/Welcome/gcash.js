import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('gcash')
        .setDescription('Shows the GCash payment information.'),

    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setColor('#0066FF')
            .setTitle('💙 GCash Payment')
            .addFields(
                {
                    name: '📱 GCash Number',
                    value: '09XX XXX XXXX',
                },
                {
                    name: '👤 Account Name',
                    value: 'Your Name',
                },
                {
                    name: '📝 Note',
                    value: 'Include your Minecraft username after sending the payment.',
                }
            )
            .setFooter({ text: 'InfinitySMP Store' })
            .setTimestamp();

        await interaction.reply({
            embeds: [embed],
            ephemeral: true
        });
    },
};
