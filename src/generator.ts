import { readdir, writeFileSync } from "fs";

const dir = `${__dirname}/snippets/`;
const data = {};

readdir(dir, (err, files) => {
  return new Promise((resolve, reject) => {
    if (err) {
      reject(err);
    }

    files.forEach((file) => {
      const content = require(`${dir}${file}`);
      Object.assign(data, content);
    });
    resolve(data);
  }).then((data) => {
    writeFileSync("./snippets.json", JSON.stringify(data));
  });
});
