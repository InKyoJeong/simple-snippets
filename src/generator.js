var fs = require("fs");
var dir = "".concat(__dirname, "/snippets/");
var data = {};
fs.readdir(dir, function (err, files) {
    return new Promise(function (resolve, reject) {
        if (err) {
            reject(err);
        }
        files.forEach(function (file) {
            var content = require("".concat(dir).concat(file));
            Object.assign(data, content);
        });
        resolve(data);
    }).then(function (data) {
        fs.writeFileSync("./snippets.json", JSON.stringify(data));
    });
});
