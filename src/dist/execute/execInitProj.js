"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execInitProject = execInitProject;
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function execInitProject() {
    var projectName;
    rl.question("Enter a project name: ", function (input) {
        projectName = input;
    });
    console.log("Creating project on ./");
}
//# sourceMappingURL=execInitProj.js.map