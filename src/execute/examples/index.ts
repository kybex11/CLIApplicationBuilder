import { input } from "@openstation/cliapplicationbuilder";

input("What a your name?")
  .then(name => {
    console.log(`Hello, ${name}`);
  });