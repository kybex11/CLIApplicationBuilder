"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selector = selector;
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function selector(selections, title, askTitle) {
    console.log(title);
    selections.forEach(function (title_, index_) {
        console.log("".concat(index_ + 1, ") ").concat(title_));
    });
    return new Promise(function (resolve) {
        rl.question(askTitle, function (input) {
            var number = parseInt(input);
            if (!isNaN(number) && number > 0 && number <= selections.length) {
                resolve(number);
                rl.close();
            }
            else {
                console.log("Invalid input");
                selector(selections, title, askTitle);
            }
        });
    });
}
//# sourceMappingURL=selector.js.map