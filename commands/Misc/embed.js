module.exports.run = (client, message, args) => {

                        embed=discord.Embed(title="Test", description="cool ce test", color=0x0062ff)
embed.set_author(name="ETst")
embed.add_field(name="dgd", value="sfsfd", inline=False)
embed.set_footer(text="sdfdsfsdfsdfsdfdsdfsdf")
await ctx.send(embed=embed)
                        
                        }
                        
                        module.exports.help = {
                          name: 'sendembed', // Défini le nom de la commande
                          aliases: ['pings'], // Défini ces alias [Plus tard pour le s!help]
                          category: 'Misc', // Défini sa catégorie [Plus tard pour le s!help]
                          description: 'Repondre pong quand on envoie ping', // Défini sa description [Plus tard pour le s!help]
                          cooldown: 5, // Défini le cooldown de la commande (en secondes)
                          usage: '', // Utilisation de la commande {Exemple : si la commandes est s!ban <@pseudo> mettre : <@pseudo>}
                          isUserAdmin: true, // Vérifie si l'utilisateur a visé a les permissions
                          permissions: true, // Vérifie si l'utilisateur a besoin des permissions pour utiliser la commande
                          args: false // Vérifie si la commande a besoin d'arguments
                        }
