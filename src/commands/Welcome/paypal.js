import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('paypal')
        .setDescription('Shows the PayPal payment information.'),

    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setColor('#0070BA')
            .setTitle('💙 PayPal Payment')
            .addFields(
                {
                    name: '💳 PayPal Email',
                    value: 'your@email.com',
                },
                {
                    name: '📝 Note',
                    value: 'Include your Minecraft username in the payment note.',
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
