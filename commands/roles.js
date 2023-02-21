      
      
      
      
      
      
    const discord = require ("discord.js");
    const prefix = require('../config/config.json')
    const fetch = require("node-fetch");
    
    module.exports.run = (client, message, args) =>{
        let uri = "https://aws.random.cat/meow";
        fetch(uri)
        .then(response => response.json())
        .then(json => {
            const dog = new discord.MessageEmbed()
            .setColor('#b434eb')
            .setTitle('Cat')
            .setImage(json.file)
            .setFooter("Made by LachlanDev#8014", "https://cdn.discordapp.com/avatars/365350852967399454/ce6e6e91fa887aa86e23ef356c9878fe")
            message.channel.send({ embeds: [dog] })
        });
    }
    
    module.exports.details = {
        name:'Rolls',
        author:'LachlanDev#8014',
        icon:'https://cdn.discordapp.com/avatars/365350852967399454/ce6e6e91fa887aa86e23ef356c9878fe',
        description:'Sends a random image of a cat.',
        usage:`${prefix.prefix}cat`
    }  
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
    //   // Get a list of roles
    //   // let roleCount = message.guild.roles.cache.map(x => "<@&" + x.id + ">").join(" ")

    //   // // Return embed with list of roles
    //   // let embed = new Discord.MessageEmbed()
    //   // .setTitle(`Roles [${message.guild.roles.cache.size}]`)
    //   // .setDescription(roleCount)
    //   // .setColor(data.config.color)
    //   // .setFooter(data.config.footer)

    //   // return message.channel.send(embed);
    //   const Discord = require('discord.js');
    //   let string = ``
    //   message.guild.roles.cache.sort((a, b) => b.position - a.position).map(r => {
    //     let rr = r.name
    //     if (rr.length > 24) rr = r.name.slice(0, 24 - rr.length)
    //     string += `${rr}${' '.repeat(24-rr.length)} ║ ${r.id} ║ ${r.hexColor} ║ ${' '.repeat(7-r.members.size.toString().length)}${r.members.size}\n`.replace('#000000', '   -   ')
    //   })
    //   if (string.length < 1500) return message.channel.send(`\`NAME${' '.repeat(20)} ║ ${' '.repeat(8)}ID${' '.repeat(8)} ║  COLOR  ║ MEMBERS\n` + string + '`')
    //   let array = Discord.Util.splitMessage(string, {
    //     maxLength: 2000,
    //     char: '\n'
    //   })
    //   let pages = array
    //   let page = 1;
    //   string = `NAME${' '.repeat(20)} ║ ${' '.repeat(8)}ID${' '.repeat(8)} ║  COLOR  ║ MEMBERS\n`
    //   string += `${pages[page - 1]}`
    //   const embed = new Discord.MessageEmbed()
                
    //         .setTitle(`Roles for ${message.guild.name}:\n \u200b`)
    //             .setDescription(`\`${string}\`\n`)
    //             .setColor(data.config.color)
                
    //             .setFooter(`Page ${page} of ${pages.length}`)
        
    //   message.channel.send(embed).then(mesg => {
    
    //     mesg.react('◀').then(r => {
    //       mesg.react('▶');
    
    //       const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
    //       const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;
    
    //       const backwards = mesg.createReactionCollector(backwardsFilter, {
    //         time: 6000000
    //       });
    //       const forwards = mesg.createReactionCollector(forwardsFilter, {
    //         time: 6000000
    //       });
    
    //       backwards.on('collect', r => {
    //         if (page === 1) return;
    //         page--;
    //         string = `NAME${' '.repeat(20)} ║ ${' '.repeat(8)}ID${' '.repeat(8)} ║  COLOR  ║ MEMBERS\n`
    //         string += `${pages[page - 1]}`
    //         mesg.edit(new Discord.MessageEmbed()
                
    //         .setTitle(`Roles for ${message.guild.name}:\n \u200b`)
    //             .setDescription(`\`${string}\`\n`)
    //             .setColor(data.config.color)
                
    //             .setFooter(`Page ${page} of ${pages.length}`))
    //       })
    
    //       forwards.on('collect', r => {
    //         if (page === pages.length) return;
    //         page++;
    //         string = `NAME${' '.repeat(20)} ║ ${' '.repeat(8)}ID${' '.repeat(8)} ║  COLOR  ║ MEMBERS\n`
    //         string += `${pages[page - 1]}`
    //         mesg.edit(new Discord.MessageEmbed()
                
    //         .setTitle(`Roles for ${message.guild.name}:\n \u200b`)
    //             .setDescription(`\`${string}\`\n`)
    //             .setColor(data.config.color)
    //             .setFooter(`Page ${page} of ${pages.length}`))
    //       })
    
    //     })
    //   })
    