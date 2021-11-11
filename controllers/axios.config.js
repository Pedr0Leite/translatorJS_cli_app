const https = require("https");
const dotenv = require("dotenv").config();

const rapidapi_key = process.env.RAPIDAPI_KEY;
const rapidapi_host = process.env.RAPIDAPI_HOST;
const URL = process.env.URL;

const Agent = new https.Agent({
  rejectUnauthorized: false,
});

function config(directory, text, language) {
  var config = {
    method: "POST",
    url: URL + "/" + directory,
    httpsAgent: Agent,
    headers: {
      "content-type": "application/json",
      "x-rapidapi-host": rapidapi_host,
      "x-rapidapi-key": rapidapi_key,
    },
    data: [{ Text: text }],
  };

  language == "" || language == undefined
    ? (config["params"] = { "api-version": "3.0" })
    : (config["params"] = {
        to: language,
        "api-version": "3.0",
        profanityAction: "NoAction",
        textType: "plain",
      });

  return config;
}

module.exports = { config };
