import * as readline from 'readline';
import * as path from 'path';
import * as fs from 'fs';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let projectName: string | undefined;
let currentDir: any;
let prefix: string;

const indexExample = fs.readFileSync('./examples/index.ts');

export function execInitProject() {
    rl.question("Enter a project name: ", (input) => {
       currentDir = process.cwd();
       projectName = input; 
       console.log(`Creating project ${projectName} in ${path.join(currentDir, projectName)}`);

       rl.question("Use TypeScript? (y/n) ", (input) => {
        if (input == "y") {
            prefix = "ts";
        } else if (input == "n") {
            prefix = "js";
        }
        init();
       })
    });
}

function init() {
    fs.mkdirSync(`${currentDir}/src`);
    fs.appendFile(`${currentDir}/src/index.${prefix}`, indexExample, 'utf-8', (e)=>{});
}