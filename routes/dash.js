const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../auth/auth');
const discord = require('../bot')
const dateformat = require('dateformat')
const number = require('easy-number-formatter')
const themes = "./config/theme.json"
const jsonfile = require('jsonfile')
const config = require("../config/config.json")
const Discord = require("discord.js")
const { PermissionsBitField } = require('discord.js');

router.get('/dash',ensureAuthenticated,(req,res) =>{
    var theme = jsonfile.readFileSync(themes);
    let guilds = discord.client.guilds.cache
    res.render('home/dash',{
        Permissions: Discord.Permissions,
        manage: Discord.Permissions.FLAGS.MANAGE_GUILD,
        bot_guilds:guilds,
        profile:req.user,
        client:discord.client,
        dateformat:dateformat,
        number:number,
        theme:theme,
        config:require("../config/config.json"),
    })
})

module.exports = router;
