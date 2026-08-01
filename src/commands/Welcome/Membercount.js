import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

const ROLE_ID = '1528282130080071690';

export default {
    data: new SlashCommandBuilder()
        .setName('membercount')
        .setDescription('Shows the server member count.'),

    async execute(interaction) {
        if (!interaction.member.roles.cache.has(ROLE_ID)) {
            return interaction.reply({
                content: '❌ You do not have permission to use this command.',
                ephemeral: true,
            });
        }

        const guild = interaction.guild;

        await guild.members.fetch();

        const humans = guild.members.cache.filter(member => !member.user.bot).size;
        const bots = guild.members.cache.filter(member => member.user.bot).size;

        const embed = new EmbedBuilder()
            .setColor('#57F287')
            .setTitle('👥 Server Member Count')
            .setThumbnail(guild.iconURL({ dynamic: true }))
            .addFields(
                {
                    name: '👤 Members',
                    value: `**${humans}**`,
                    inline: true,
                },
                {
                    name: '🤖 Bots',
                    value: `**${bots}**`,
                    inline: true,
                },
                {
                    name: '📊 Total Members',
                    value: `**${guild.memberCount}**`,
                    inline: true,
                }
            )
            .setFooter({
                text: guild.name,
                iconURL: guild.iconURL({ dynamic: true }),
            })
            .setTimestamp();

        await interaction.reply({
            embeds: [embed],
            ephemeral: true,
        });
    },
};
