

export function arrowSelector(selections: string[], title: string): Promise<string> {
    let selectedIndex = 0;
    let resolvePromise: (value: string) => void;

    console.log(title);
    renderSelections();

    process.stdin.setRawMode(true);
    process.stdin.on('data', (data) => {
        const keyValue = data.toString();
        switch(keyValue) {
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
        selections.forEach((title_, index_) => {
            const prefix = index_ === selectedIndex ? `\x1B[33m> \x1B[0m` : '  ';
            console.log(`${prefix} ${title_}`);
        });
    }

    return new Promise(resolve => {
        resolvePromise = resolve;
    })
}