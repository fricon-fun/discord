const fricon = require("../src/index")
//const djs = require("discord.js")
async function startUpload(){
 /*await fricon.upload({
    guild: "ggh",
    emoji: "hammer"
  })
  await fricon.uploadAll()*/
 // await fricon.upload({emoji: "hammer"})
  
}
(async() => {
  console.log(await fricon.ping())
})()
