import { selector } from "./selector";


selector(["mods", "play", "quit"], "Game Menu", "")

  .then(number => {

    console.log(`\nYou chose: ${number}`);

  });