var axios = require("axios").default;

async function axiosRequest(config, type) {
  let result;

  await axios
    .request(config)
    .then(function (response) {
      type == "Detect"
        ? (result = response.data[0].language)
        : (result = response.data[0].translations[0].text);
    })
    .catch(function (error) {
      console.log("Error on Api file: " + error);
      result = error;
    });

  return result;
}

module.exports = { axiosRequest };
