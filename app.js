#!usr/bin/node
const yargs = require("yargs");

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