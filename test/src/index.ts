import { selector } from '@openstation/cliapplicationbuilder/src/index';

selector(["1", "2", "3"], "Game Menu", "")
  .then(number => {
    console.log(`\nYou chose: ${number}`);

});