#!usr/bin/node
const yargs = require("yargs");

const text = 'I would really like to drive your car around the block a few times.';
const lang = 'it';

(async () =>{
  const getTranslation = require("./api");
  var test = await getTranslation.translateText(text, lang).then((response) => console.log(response));
})();

const options = yargs
  .usage("Usage: -w <word> -l <language>")
  .option("w", {
    alias: "word",
    describe: "Word to be translated",
    type: "string",
    demandOption: false,
  })
  .usage("Usage: -n <newspaper>")
  .option("mw", {
    alias: "multiple words",
    describe:
      "Multiple words to be translated",
    type: "number",
    demandOption: false,
  })
  .usage("Usage: -c <cripto symbol>")
  .option("c", {
    alias: "symbol",
    describe: "CriptoCurrency Symbol",
    type: "string",
    demandOption: false,
  })
  .usage("Usage: -c <cripto symbol>")
  .option("c", {
    alias: "symbol",
    describe: "CriptoCurrency Symbol",
    type: "string",
    demandOption: false,
  }).argv;