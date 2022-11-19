const axios = require("axios")
module.exports = async () => {
  let current = Date.now()
  let apiCall = await axios.get(`https://friconv1.kardespro.repl.co/api/external/sessionTimeout`)
  let calculated = apiCall.data._t - current 
  return calculated
}
