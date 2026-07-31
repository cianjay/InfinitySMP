const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'gcash',
    description: 'Shows the GCash payment information.',

    async execute(message) {
        const embed = new EmbedBuilder()
            .setColor('#0066FF')
            .setTitle('💙 GCash Payment')
            .addFields(
                {
                    name: '📱 GCash Number',
                    value: '09XX XXX XXXX',
                    inline: false,
                },
                {
                    name: '👤 Account Name',
                    value: 'Your Name',
                    inline: false,
                },
                {
                    name: '📝 Note',
                    value: 'Please include your Minecraft username after sending your payment.',
                    inline: false,
                }
            )
            .setFooter({
                text: 'InfinitySMP Store',
            })
            .setTimestamp();

        await message.reply({ embeds: [embed] });

        // Delete the user's command message
        message.delete().catch(() => {});
    },
};
