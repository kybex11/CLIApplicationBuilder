```ts

//init project
execInitProject();


//arrowSelection

arrowSelector(["mods", "play", "quit"], "Game Menu")

  .then(number => {

    console.log(`\nYou chose: ${number}`);
    process.exit();

});

//input

input("What a your name?")
  .then(name => {
    console.log(name);
});

//logWithTitle

logWithTitle("text", "title", true, "WARNING!!!")

//question

question("What a your name?", "Name Here:")
  .then(name => {
    console.log(name);
});

//selector

selector(["mods", "play", "quit"], "Game Menu", "")
  .then(number => {
    console.log(`\nYou chose: ${number}`);

});

```

```ts
// on ts
import { } from "@openstation/cliapplicationbuilder/src/index";

//on js

const { } = require("@openstation/cliapplicationbuilder/src/dist/index");
```

# install - npm i