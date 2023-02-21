
const Discord = require ("discord.js");
const prefix = require('../config/config.json')
const fetch = require("node-fetch");

module.exports.run = async(client, message, args) =>{
    let NValidEVAL = new Discord.MessageEmbed()
    .setAuthor(" ⛔ Action | EVAL")
    .setColor("#ff0000")
    .addField("Executor", `<@${message.author.id}>`)
    .addField(
      ":outbox_tray: Output",
      `\`\`\`diff\n Error: Not a valid Eval\`\`\``
    )
    .addField(
      ":white_check_mark: Solution",
      `\`\`\`diff\n !Eval {code}\`\`\``
    )
    .setFooter(`lol`);
  if (
    message.author.id !== "259875874046738432" &&
    message.author.id !== "342796453477089281" &&
    message.author.id !== "260594090255712258" &&
    message.author.id !== "706984059183693854" &&
    message.author.id !== "750880076555354185"
  )
    return message.channel.send(`This is a developer only command.`);
  if (!args[0]) return message.channel.send({ embeds: [NValidEVAL] });

  var testArr = ["a", "b", "c", "d"];
  function clean(text) {
    if (typeof text === "string")
      return text
        .replace(/`/g, "`" + String.fromCharCode(8203))
        .replace(/@/g, "@" + String.fromCharCode(8203));
    else return text;
  }
  try {
    var output = true;
    let code = args.join(" ");
    if (code.startsWith("```js") && code.endsWith("```"))
      code = code.slice(5, -3);
    if (args[0].toLowerCase() == "async")
      code = `(async function(){\n${code.slice(5)}\n})(client, message)`;
    let evaled = await eval(code);
    let rawEvaled = evaled;
    if (typeof evaled !== "string")
      evaled = require("util").inspect(evaled, {
        depth: 0,
      });
    let dataType = Array.isArray(rawEvaled) ? "Array<" : typeof rawEvaled,
      dataTypes = [];
    if (~dataType.indexOf("<")) {
      rawEvaled.forEach((d) => {
        if (~dataTypes.indexOf(Array.isArray(d) ? "Array" : typeof d)) return;
        dataTypes.push(Array.isArray(d) ? "Array" : typeof d);
      });
      dataType +=
        dataTypes.map((s) => s[0].toUpperCase() + s.slice(1)).join(", ") +
        ">";
    }
    // The Embed for the result of the EVAl
    let EvalResult = new Discord.MessageEmbed()
      .setTitle(
        `Evaluated in ${Math.round(Date.now() - message.createdTimestamp)}ms`
      )
      .addField(":inbox_tray: Input", `\`\`\`js\n${code}\n\`\`\``)
      .addField(
        ":outbox_tray: Output",
        `\`\`\`js\n${clean(evaled)
          .slice(0, 1000)
          .replace(client.token, "You really think im giving that out?")
          }\n\`\`\``
      )
      // .addField(":outbox_tray: Output", `\`\`\`js\n${clean(evaled).slice(0, 1000)}\n\`\`\``)
      .addField(
        "Type",
        `\`\`\`xl\n${
          dataType.substr(0, 1).toUpperCase() + dataType.substr(1)
        }\n\`\`\``
      )
      .setColor("GREEN");

    if (output) message.channel.send({ embeds: [EvalResult] });;
  } catch (err) {
    message.channel.send(`\`ERROR\` \`\`\`js\n${clean(err)}\n\`\`\``);
  }
}

module.exports.details = {
    name:'Dog',
    author:'LachlanDev#8014',
    icon:'https://cdn.discordapp.com/avatars/365350852967399454/ce6e6e91fa887aa86e23ef356c9878fe',
    description:'Sends a random image of a dog.',
    usage:`${prefix.prefix}dog`
}












