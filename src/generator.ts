const fs = require("fs");

const readFile = (path: string) =>
  fs
    .createReadStream(path)
    .on("data", (data: Buffer) => createJsonFile(data.toString()));

const createJsonFile = (data: string) => {
  return fs.appendFile("./snippets.json", JSON.stringify(data, null, 4), () => {
    console.log("finish");
  });
};

["js", "react-js", "react-ts"].forEach((file: string) =>
  readFile(`./snippets/${file}.json`)
);
