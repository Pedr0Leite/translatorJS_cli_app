var axios = require("axios").default;
const dotenv = require("dotenv").config();

var rapidapi_key = process.env.RAPIDAPI_KEY;

//Detect Language
var options1 = {
  method: 'POST',
  url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'accept-encoding': 'application/gzip',
    'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
    'x-rapidapi-key': rapidapi_key
  },
  data: {q: 'English is hard, but detectably so'}
};

// axios.request(options1).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

//translate
var options2 = {
  method: 'POST',
  url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'accept-encoding': 'application/gzip',
    'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
    'x-rapidapi-key': rapidapi_key
  },
  data: {source: 'en', target: 'es', q: 'world!'}
};

axios.request(options2).then(function (response) {
	console.log(response.data.translations);
}).catch(function (error) {
	console.error(error);
});