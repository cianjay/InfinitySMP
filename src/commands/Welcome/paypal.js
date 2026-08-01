import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

const REQUIRED_ROLE = '1528282130080071690';

export default {
    data: new SlashCommandBuilder()
        .setName('paypal')
        .setDescription('Shows the Paypal payment information.'),

    async execute(interaction) {
        if (!interaction.member.roles.cache.has(REQUIRED_ROLE)) {
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
                    name: '📸 Proof',
                    value: 'After sending your payment, create a ticket and send a screenshot as proof.',
                    inline: false,
                }
            )
            .setFooter({
                text: 'InfinitySMP Store',
            })
            .setTimestamp();

        return interaction.reply({
            embeds: [embed],
            ephemeral: true,
        });
    },
};
