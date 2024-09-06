"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
(0, index_1.arrowSelector)(["mods", "play", "quit"], "Game Menu")
    .then(function (number) {
    console.log("\nYou chose: ".concat(number));
    process.exit();
});
//# sourceMappingURL=test.js.map