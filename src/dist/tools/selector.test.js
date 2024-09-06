"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var selector_1 = require("./selector");
(0, selector_1.selector)(["mods", "play", "quit"], "Game Menu", "")
    .then(function (number) {
    console.log("\nYou chose: ".concat(number));
});
//# sourceMappingURL=selector.test.js.map