```ts

//arrowSelection
import { arrowSelector } from "@openstation/cliapplicationbuilder/src/index";

arrowSelector(["mods", "play", "quit"], "Game Menu")

  .then(number => {

    console.log(`\nYou chose: ${number}`);
    process.exit();

});

//input
import { input } from "@openstation/cliapplicationbuilder/src/index";

input("What a your name?")
  .then(name => {
    console.log(name);
});

//logWithTitle
import { logWithTitle } from "@openstation/cliapplicationbuilder/src/index";

logWithTitle("text", "title", true, "WARNING!!!")

//question
import { question } from "@openstation/cliapplicationbuilder/src/index";

question("What a your name?", "Name Here:")
  .then(name => {
    console.log(name);
});

//selector
import { selector } from "@openstation/cliapplicationbuilder/src/index";

selector(["mods", "play", "quit"], "Game Menu", "")
  .then(number => {
    console.log(`\nYou chose: ${number}`);

});

```