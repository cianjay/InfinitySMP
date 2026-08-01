import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

const ROLE_ID = '1528282130080071690';

export default {
    data: new SlashCommandBuilder()
        .setName('paypal')
        .setDescription('Display the PayPal payment information.'),

    async execute(interaction) {
        if (!interaction.member.roles.cache.has(ROLE_ID)) {
            return interaction.reply({
                content: '❌ You do not have permission to use this command.',
                ephemeral: true,
            });
        }

        const embed = new EmbedBuilder()
            .setColor('#0070BA')
            .setTitle('💙 PayPal Payment')
            .setDescription(
                'Thank you for supporting **InfinitySMP**!\n\n' +
                'Please send your payment using the information below.'
            )
            .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
            .addFields(
                {
                    name: '💳 PayPal Email',
                    value: '`yourpaypal@email.com`',
                    inline: false,
                },
                {
                    name: '📝 Payment Note',
                    value: 'Include your **Minecraft username** in the payment note.',
                    inline: false,
                },
                {
                    name: '📸 Proof of Payment',
                    value: 'After sending your payment, create a ticket and send a **screenshot** of the transaction.',
                    inline: false,
                }
            )
            .setFooter({
                text: 'InfinitySMP Store',
                iconURL: interaction.guild.iconURL({ dynamic: true }),
            })
            .setTimestamp();

        return interaction.reply({
            embeds: [embed],
            ephemeral: true,
        });
    },
};
