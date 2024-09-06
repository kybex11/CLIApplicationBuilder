"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.question = question;
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function question(question, query) {
    console.log("".concat(question, "\n"));
    return new Promise(function (resolve) {
        rl.question("".concat(query, " "), function (answer) {
            resolve(answer.trim());
            rl.close();
        });
    });
}
//# sourceMappingURL=question.js.map