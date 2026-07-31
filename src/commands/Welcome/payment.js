import {
    SlashCommandBuilder,
    EmbedBuilder
} from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('payment')
        .setDescription('View available payment methods.')
        .addStringOption(option =>
            option
                .setName('method')
                .setDescription('Choose a payment method.')
                .setRequired(true)
                .addChoices(
                    { name: 'PayPal', value: 'paypal' },
                    { name: 'GCash', value: 'gcash' }
                )
        ),

    async execute(interaction) {
        const method = interaction.options.getString('method');

        const embed = new EmbedBuilder();

        if (method === 'paypal') {
            embed
                .setColor('#009CDE')
                .setTitle('💙 PayPal Payment')
                .setDescription('Purchase your InfinitySMP ranks safely using PayPal.')
                .addFields(
                    {
                        name: '💳 PayPal Email',
                        value: 'yourpaypal@email.com',
                    },
                    {
                        name: '📝 Note',
                        value: 'Please include your Minecraft username in the payment note.',
                    }
                );
        }

        if (method === 'gcash') {
            embed
                .setColor('#0066FF')
                .setTitle('💙 GCash Payment')
                .setDescription('Purchase your InfinitySMP ranks using GCash.')
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
                        value: 'Please include your Minecraft username after sending your payment.',
                    }
                );
        }

        embed
            .setFooter({ text: 'InfinitySMP Store' })
            .setTimestamp();

        await interaction.reply({
            embeds: [embed],
            ephemeral: true
        });
    },
};
