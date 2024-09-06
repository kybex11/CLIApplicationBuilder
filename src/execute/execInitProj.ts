import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export function execInitProject() {
    let projectName;

    rl.question("Enter a project name: ", (input) => {
       projectName = input; 
    });

    console.log("Creating project on ./");
}