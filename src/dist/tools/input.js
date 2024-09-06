"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = input;
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function input(placeholder) {
    return new Promise(function (resolve) {
        rl.question("".concat(placeholder, " "), function (answer) {
            resolve(answer.trim());
            rl.close();
        });
    });
}
//# sourceMappingURL=input.js.map