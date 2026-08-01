import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

const ROLE_ID = '1528282130080071690';

export default {
    data: new SlashCommandBuilder()
        .setName('paypal')
        .setDescription('Shows the PayPal payment information.'),

    async execute(interaction) {
        // Check if the user has the required role
        if (!interaction.member.roles.cache.has(ROLE_ID)) {
            return interaction.reply({
                content: '❌ You do not have permission to use this command.',
                ephemeral: true,
            });
        }

        const embed = new EmbedBuilder()
            .setColor('#0070BA')
            .setTitle('💙 PayPal Payment')
            .setDescription('Thank you for supporting **InfinitySMP**!')
            .addFields(
                {
                    name: '💳 PayPal Email',
                    value: '`yourpaypal@email.com`',
                    inline: false,
                },
                {
                    name: '📝 Payment Instructions',
                    value: 'Please include your **Minecraft username** in the payment note.',
                    inline: false,
                },
                {
                    name: '📝 Note',
                    value: 'Include your Minecraft username after sending your payment. **(Make sure to send a screenshot of your payment as proof.)**',
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
