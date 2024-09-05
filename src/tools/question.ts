import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export function question(question: string, query: string): Promise<any> {
    console.log(`${question}\n`);

    return new Promise(resolve => {
        rl.question(`${query} `, (answer) => {
            resolve(answer.trim());
            rl.close(); 
        });
    });
}