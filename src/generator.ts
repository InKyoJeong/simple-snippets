const fs = require("fs");
const dir = `${__dirname}/snippets/`;

const data = {};

fs.readdir(dir, (err: Error, files: any) => {
  return new Promise((resolve, reject) => {
    if (err) {
      reject(err);
    }

    files.forEach((file: string) => {
      const content = require(`${dir}${file}`);
      Object.assign(data, content);
    });
    resolve(data);
  }).then((data) => {
    fs.writeFileSync("./snippets.json", JSON.stringify(data));
  });
});
