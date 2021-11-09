var axios = require("axios").default;
const dotenv = require("dotenv").config();

(async () =>{
    const getTranslation = require("./api");
    const result = await getTranslation.translateText(text, language).then((response) => console.log(response));
    })();

//One language
function oneLanguage(){

}

//Many language
function multipleLanguage(){

}

//Detect language
function detectLanguage(text){
    (async () =>{
        const api = require("./api");
        const result = await api.detectLanguage(text).then((response) => console.log(response));
    })();
}
console.log('detectLanguage :', detectLanguage('Isto é um test'));

// module.exports = {
//     oneLanguage,
//     multipleLanguage,
//     detectLanguage
// }
