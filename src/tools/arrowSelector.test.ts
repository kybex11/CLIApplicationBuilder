import { arrowSelector } from "./arrowSelector";

arrowSelector(["mods", "play", "quit"], "Game Menu")

  .then(number => {

    console.log(`\nYou chose: ${number}`);

  });