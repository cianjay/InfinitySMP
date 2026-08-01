import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('paypal')
        .setDescription('Shows the PayPal payment information.'),

    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setColor('#0070BA')
            .setTitle(' 💙 PayPal Payment')
            .setDescription('Thank you for supporting InfinitySMP!')
            .addFields(
                {
                    name: ' 💳 PayPal Email',
                    value: '`yourpaypal@email.com`',
                    inline: false,
                },
                {
                    name: '📝 Note',
                    value: 'Include your Minecraft username in the payment note. (Make Sure to take a Screenshot of the payment for proof)',
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
