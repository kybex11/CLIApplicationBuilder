"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logWithTitle = logWithTitle;
function logWithTitle(text, title, useTranscriptTitle, warningText) {
    if (useTranscriptTitle) {
        console.log('\x1b[33m%s\x1b[0m', "[ ".concat(title, " ]"));
    }
    else {
        console.log('\x1b[33m%s\x1b[0m', "".concat(title));
    }
    console.log("\n ".concat(text));
    if (warningText.length >= 1) {
        console.log('\x1b[31m%s\x1b[0m', "\n".concat(warningText));
    }
}
//# sourceMappingURL=logWithTitle.js.map