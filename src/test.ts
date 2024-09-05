import { question } from "./tools/question";

question("What a your name?", "Name Here:")
  .then(name => {
    console.log(name);
  });