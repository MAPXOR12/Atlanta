module.exports = {
    /* The token of your Discord Bot */
    token: "ODYzNDA0ODA0NTQ1MzE0ODI3.YOmaYg.7hnmMyhm2CSZaYag8A8O8H2f4-c",
    /* For the support server */
    support: {
        id: "803707047173423134", // The ID of the support server
        logs: "814773471669649408", // And the ID of the logs channel of your server (new servers for example)
    },
    /* Dashboard configuration */
    dashboard: {
        enabled: false, // whether the dashboard is enabled or not
        secret: "XXXXXXXXXXX", // Your discord client secret
        baseURL: "https://dashboard.atlanta-bot.fr", // The base URl of the dashboard
        logs: "855886988774735923", // The channel ID of logs
        port: 8080, // Dashboard port
        expressSessionPassword: "XXXXXXXXXXX", // Express session password (it can be what you want)
        failureURL: "https://www.atlanta-bot.fr" // url on which users will be redirected if they click the cancel button (discord authentication)
    },
    mongoDB: "mongodb+srv://zalm:zalm12345+@cluster0.xqz5a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", // The URl of the mongodb database
    prefix: "R", // The default prefix for the bot
    /* For the embeds (embeded messages) */
    embed: {
        color: "#ff0000", // The default color for the embeds
        footer: "Rooky" // And the default footer for the embeds
    },
    /* Bot's owner informations */
    owner: {
        id: "743887896481628190", // The ID of the bot's owner
        name: "!・ xMÅPXØøØR ᵈᵈˢ /ᵖʰ#2000" // And the name of the bot's owner
    },
    /* DBL votes webhook (optional) */
    votes: {
        port: 5000, // The port for the server
        password: "XXXXXXXXXXX", // The webhook auth that you have defined on discordbots.org
        channel: "XXXXXXXXXXX" // The ID of the channel that in you want the votes logs
    },
    /* The API keys that are required for certain commands */
    apiKeys: {
        // BLAGUE.XYZ: https://blague.xyz/
        blagueXYZ: "https://blague.xyz/api/joke/random",
        // DBL: https://discordbots.org/api/docs#mybots
        dbl: "XXXXXXXXXXX",
        // AMETHYSTE: https://api.amethyste.moe
        amethyste: "4672ef125895f126a7e5afffd49686d1452c2dd6d3b971d77fdf163ea3953809b3c3dac6cdbba920008f42e4f6dab13eebdc61406ef1d6c15fad9e0012dcdf7c",
        // SENTRY: https://sentry.io (this is not required and not recommended - you can delete the field)
        sentryDSN: "XXXXXXXXXXX"
    },
    /* The others utils links */
    others: {
        github: "", // Founder's github account
        donate: "" // Donate link
    },
    /* The Bot status */
    status: [
        {
            name: "help on {serversCount} servers",
            type: "PLAYING"
        },
        {
            name: "?help",
            type: "PLAYING"
        }
    ]
};
