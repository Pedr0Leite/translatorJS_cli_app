#!usr/bin/node
const yargs = require("yargs");
// (async () =>{
//   const getTranslation = require("./api");
//   var test = await getTranslation.translateText(text, lang).then((response) => console.log(response));
// })();

const options = yargs
  .usage("Usage: -t <text>")
  .option("t", {
    alias: "text",
    describe: "text to be translated",
    type: "string",
    demandOption: false,
  })
  .usage("Usage: -l <language>")
  .option("l", {
    alias: "language",
    describe: "language",
    type: "string",
    demandOption: false,
  })
  .usage("Usage: -d <detect>")
  .option("d", {
    alias: "detect",
    describe: "detect language",
    type: "string",
    demandOption: false,
  }
  ).argv;

  //Always has to be the text argument first
  const firstArg = process.argv[2];
  const text = process.argv[3];

  //Always has to come after, can be -l or -d
  const secondArg = process.argv[4];
  
  if(secondArg == '-l'){
    const language = process.argv[5].split(',');
    console.log('language :', language);
  }


  if(firstArg == "-w"){
    (async () =>{
    const getTranslation = require("./controllers/api");
    const result = await getTranslation.translateText(text, language).then((response) => console.log(response));
    })();

  }else if(firstArg == "-s"){

  }else if(firstArg == "-d"){

  }  else {
  console.log(
    "\n***************************************" +
      "\n*  Welcome to Translator CLI app!   *" +
      "\n* -w  <word>                        *" +
      "\n* -s  <sentence> (for help, --help) *" +
      "\n* -l  <language>                    *" +
      "\n*************************************"
      );
  }