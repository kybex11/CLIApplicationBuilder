import { arrowSelector } from "./tools/arrowSelector";

arrowSelector(["mods", "play", "quit"], "Game Menu")

  .then(number => {

    console.log(`\nYou chose: ${number}`);
    process.exit();

  });