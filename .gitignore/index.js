const Discord = require ("discord.js");

var bot = new Discord.Client ();

function generateHex() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

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
    if (message.content === "Quelle couche pour miner ?")
        message.reply(" Environ couche 6");})
bot.on("message", message => {
    if (message.content === "Qui est le fondateur ?")
        message.reply(" Zerko, Diabolo et Corld sont les fondateurs");})
bot.on("message", message => {
    if (message.content === "Comment voir  les different monde pour miner, nether...?")
        message.reply(" faits /warp in game 😜");})
bot.on("message", message => {
    if (message.content === "Quelle âge pour entrer dans le staff ?")
        message.reply(" 14ans pour modo chat et 16 pour modo joueur");})
bot.on("message", message => {
    if (message.content === "Qui est ton créateur ?")
        message.reply(" C'est Hihax");})
bot.on("message", message => {
    if (message.content === "Quand ouvre le serveur ?")
        message.reply(" Le 24 février à 15h 👍");})
bot.on("message", message => {
    if (message.content === "Combien d'abonnés pour être grade Youtubeur ?")
        message.reply(" Il en faut 500");})
bot.on("message", message => {
    if (message.content === "Quel est le ts ?")
        message.reply(" ts.minozia.fr");})
bot.on("message", message => {
    if (message.content === "Quel est le site du serveur ?")
        message.reply(" https://minozia.fr");}) 
bot.on("message", message => {
    if (message.content === "Qui est le plus bg?")
        message.reply(" Hihax bien sur");})
bot.on("message", message => {
    if (message.content === "Qui est là ?")
        message.reply(" MOIIIIII");})
bot.on("message",message => {
    if(message.content === 'Roll') {
        const args = message.content.split(" ");
        const num1 = 0;
        const num2 = 100;
        const numberGenerated = Math.floor(Math.random() * parseInt(num2) + num1);
        console.log("Le bot a généré le chiffre: " + numberGenerated + " !");
        message.reply("Le bot a généré le chiffre:  **" + numberGenerated");}} 


        
        
        
        
        
