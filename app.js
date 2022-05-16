#!usr/bin/node
// const yargs = require("yargs");
const api = require("./controllers/api");

// const options = yargs
//   .usage("Usage: -t <text>")
//   .option("t", {
//     alias: "text",
//     describe: "text to be translated",
//     type: "string",
//     demandOption: false,
//   })
//   .usage("Usage: -l <language>")
//   .option("l", {
//     alias: "language",
//     describe: "language",
//     type: "string",
//     demandOption: false,
//   })
//   .usage("Usage: -d <detect>")
//   .option("d", {
//     alias: "detect",
//     describe: "detect language",
//     type: "string",
//     demandOption: false,
//   }).argv;

//Arguments
const firstArg = process.argv[2];
const secondArg = process.argv[4];

if (firstArg == "-d") {
  (async () => {
    const text = process.argv[3];
    const result = await api
      .detectLanguage(text)
      .then((response) =>
        console.log(
          "That word/sentence is in the following language: " + response
        )
      );
  })();
} else if (
  (firstArg == "-t" && secondArg == "-l") ||
  (firstArg == "-l" && secondArg == "-t")
) {
  const text = firstArg == "-t" ? process.argv[3] : process.argv[5];
  const language =
    firstArg == "-l" ? process.argv[3].split(",") : process.argv[5].split(",");

  (async () => {
    const result = await api
      .translateText(text, language)
      .then((response) => console.log(response));
  })();
} else if (
  firstArg == undefined ||
  (firstArg == "-l" && secondArg == undefined) ||
  (firstArg == undefined && secondArg == "-l") ||
  (firstArg == "-t" && secondArg == undefined) ||
  (firstArg == undefined && secondArg == "-t")
) {
  console.log("Please, use the argument -t and -l together");
} else {
  console.log(
    "\n***************************************" +
      "\n*  Welcome to Translator CLI app!   *" +
      "\n* -w  <word>  (for help, --help)    *" +
      "\n* -d  <detect language>             *" +
      "\n* -l  <language>                    *" +
      "\n*************************************"
  );
}
