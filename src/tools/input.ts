import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export function input(placeholder: string): Promise<any> {
    return new Promise(resolve => {
        rl.question(`${placeholder} `, (answer) => {
            resolve(answer.trim());
            rl.close(); 
        });
    });
}