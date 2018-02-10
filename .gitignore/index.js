const Discord = require ("discord.js");

var bot = new Discord.Client ();

bot.on("ready", () => {
    bot.user.setGame("Manger");
    console.log("bot connected");
});

bot.login(process.env.TOKEN);

bot.on("message", message => {
    if (message.content === "Ça va")
        message.reply(" je vais toujours bien je suis un robot");})
bot.on("message", message => {
    if (message.content === "Salut")
        message.reply(" bonjour");})
bot.on("message", message => {
    if (message.content === "Quelle couche pour miner ? ")
        message.reply(" Environ couche 6");})
bot.on("message", message => {
    if (message.content === "Qui est le fondateur ? ")
        message.reply(" Zerko est le fondateur");})
bot.on("message", message => {
    if (message.content === "Comment voir  les different monde pour miner, nether...?" )
        message.reply(" faits /warp in game 😜");})
        
        
        
        
        
        
