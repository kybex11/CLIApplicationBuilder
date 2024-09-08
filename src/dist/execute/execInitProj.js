"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execInitProject = execInitProject;
var readline = require("readline");
var path = require("path");
var fs = require("fs");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var projectName;
var currentDir;
var prefix;
var indexExample = fs.readFileSync('./examples/index.ts');
function execInitProject() {
    rl.question("Enter a project name: ", function (input) {
        currentDir = process.cwd();
        projectName = input;
        console.log("Creating project ".concat(projectName, " in ").concat(path.join(currentDir, projectName)));
        rl.question("Use TypeScript? (y/n) ", function (input) {
            if (input == "y") {
                prefix = "ts";
            }
            else if (input == "n") {
                prefix = "js";
            }
            init();
        });
    });
}
function init() {
    fs.mkdirSync("".concat(currentDir, "/src"));
    fs.appendFile("".concat(currentDir, "/src/index.").concat(prefix), indexExample, 'utf-8', function (e) { });
}
//# sourceMappingURL=execInitProj.js.map