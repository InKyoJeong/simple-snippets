import { readdir, writeFileSync, unlinkSync, existsSync } from "fs";

const dir = `${__dirname}/snippets/`;
const data = {};
const targetFile = "./snippets.json";

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
    if (existsSync(targetFile)) {
      unlinkSync(targetFile);
    }
    writeFileSync(targetFile, JSON.stringify(data));
  });
});
