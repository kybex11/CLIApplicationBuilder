"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrowSelector_1 = require("./arrowSelector");
(0, arrowSelector_1.arrowSelector)(["mods", "play", "quit"], "Game Menu")
    .then(function (number) {
    console.log("\nYou chose: ".concat(number));
    process.exit();
});
//# sourceMappingURL=arrowSelector.test.js.map