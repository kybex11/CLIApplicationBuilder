import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export function selector(selections: string[], title: string, askTitle: string): Promise<number> {
    console.log(title);
    selections.forEach((title_, index_) => {
        console.log(`${index_ + 1}) ${title_}`);
    });
    return new Promise(resolve => {
        rl.question(askTitle, (input: string) => {
            const number = parseInt(input);

            if (!isNaN(number) && number > 0 && number <= selections.length) {
                resolve(number);
                rl.close();
            } else {
                console.log("Invalid input");
                selector(selections, title, askTitle);
            }
        });
    });
}