"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrowSelector = arrowSelector;
function arrowSelector(selections, title) {
    var selectedIndex = 0;
    var resolvePromise;
    console.log(title);
    renderSelections();
    process.stdin.setRawMode(true);
    process.stdin.on('data', function (data) {
        var keyValue = data.toString();
        switch (keyValue) {
            case '\u001B[A':
                selectedIndex = Math.max(0, selectedIndex - 1);
                break;
            case '\u001B[B':
                selectedIndex = Math.min(selections.length - 1, selectedIndex + 1);
                break;
            case '\r':
                process.stdin.setRawMode(false);
                process.stdin.removeAllListeners();
                resolvePromise(selections[selectedIndex]);
                break;
        }
        renderSelections();
    });
    function renderSelections() {
        console.clear();
        console.log(title);
        selections.forEach(function (title_, index_) {
            var prefix = index_ === selectedIndex ? "\u001B[33m> \u001B[0m" : '  ';
            console.log("".concat(prefix, " ").concat(title_));
        });
    }
    return new Promise(function (resolve) {
        resolvePromise = resolve;
    });
}
//# sourceMappingURL=arrowSelector.js.map