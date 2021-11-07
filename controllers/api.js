var axios = require("axios").default;
const dotenv = require("dotenv").config();

const rapidapi_key = process.env.RAPIDAPI_KEY;
const rapidapi_host = process.env.RAPIDAPI_HOST;
const URL = process.env.URL;

async function detectLanguage(text) {
let result;
//Detect Language
var detectLanguage = {
  method: 'POST',
  url: URL + '/Detect',
  params: {'api-version': '3.0'},
  headers: {
    'content-type': 'application/json',
    'x-rapidapi-host': rapidapi_host,
    'x-rapidapi-key': rapidapi_key
  },
  data: [{Text: text}]
};


await axios.request(detectLanguage).then(function (response) {
  result = response.data[0].translations[0].language;
}).catch(function (error) {
  console.error(error);
});

return result;

};

async function translateText(text, language) {
  let result;
//translate one word or sentence
var translateText = {
  method: 'POST',
  url: URL + '/translate',
  params: {to: language, 'api-version': '3.0', profanityAction: 'NoAction', textType: 'plain'},
  headers: {
    'content-type': 'application/json',
    'x-rapidapi-host': rapidapi_host,
    'x-rapidapi-key': rapidapi_key
  },
  data: [{Text: text}]
};

await axios.request(translateText).then(function (response) {
  result = response.data[0].translations[0].text;
}).catch(function (error) {
  console.error(error);
});
return result;
};


module.exports = { detectLanguage, translateText };