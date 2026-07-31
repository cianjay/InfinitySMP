import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('payment')
        .setDescription('View InfinitySMP payment methods.'),

    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setColor('#3BA55D')
            .setTitle('💳 InfinitySMP Payment Methods')
            .setDescription('Choose one of the payment methods below.')
            .addFields(
                {
                    name: '💙 PayPal',
                    value:
                        '**Email:** `yourpaypal@email.com`\n' +
                        '**Note:** Include your Minecraft username.',
                    inline: false,
                },
                {
                    name: '💙 GCash',
                    value:
                        '**Number:** `09XX XXX XXXX`\n' +
                        '**Name:** `Your Name`\n' +
                        '**Note:** Include your Minecraft username.',
                    inline: false,
                }
            )
            .setFooter({
                text: 'InfinitySMP Store'
            })
            .setTimestamp();

        await interaction.reply({
            embeds: [embed],
            ephemeral: true
        });
    },
};
