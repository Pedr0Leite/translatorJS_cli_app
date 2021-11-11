// process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

var axios = require("axios").default;
const axiosConfig = require("./axios.config").config;
const axiosRequest = require("./axios.request").axiosRequest;

//Detect
async function detectLanguage(text) {
let result;
let directory = 'Detect';
let type = 'Detect';
let config = axiosConfig(directory, text);

result = await axiosRequest(config, type);

return result;
};

//Translate
async function translateText(text, language) {
  let result = {};
  let directory = 'translate';
  let type = 'translate';
  
  for (let i = 0; i < language.length; i++) {
    let config = axiosConfig(directory, text, language[i]);
    result[language[i]] = await axiosRequest(config, type);
  }
return result;
};


module.exports = { detectLanguage, translateText };