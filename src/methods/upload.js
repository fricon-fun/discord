const axios = require("axios")
const Base = "https://friconv1.kardespro.repl.co/api/external/emojis"
module.exports = async (options = {}) => {
    let _$ = await axios.get(Base)
    let url = _$.data.find(a => a.name === `fricon_${options.emoji}`)
    if(!url) throw new TypeError("Emoji Not Found in Fricon Database")
    if(!options.guild)  throw new TypeError("Guild Option Required")
    let maked = `https://cdn.discordapp.com/emojis/${url.id}`
    guild.createEmoji(maked,`fricon_${options.emoji}`)
    return true
}
