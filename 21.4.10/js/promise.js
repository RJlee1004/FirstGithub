const fs = require('fs');
const { rejects } = require('node:assert');
const { resolve } = require('node:path');


//简单封装 fs封装成一个promise
const readFile = function () {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
}
readFile('data/a.txt').then(res => {
    console.log(res);
});