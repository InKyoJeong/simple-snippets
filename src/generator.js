"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var dir = "".concat(__dirname, "/data/");
var targetFile = "../snippets/snippets.code-snippets.json";
var data = {};
(0, fs_1.readdir)(dir, function (err, files) {
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
        if ((0, fs_1.existsSync)(targetFile)) {
            (0, fs_1.unlinkSync)(targetFile);
        }
        (0, fs_1.writeFileSync)(targetFile, JSON.stringify(data));
    });
});
