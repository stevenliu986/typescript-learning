import { TodoItem } from "./todoItem.js";
import { TodoCollection } from "./todoCollection.js";
import inquier from "inquirer";

let todos: TodoItem[] = [
  new TodoItem(1, "Buy Flowers"),
  new TodoItem(2, "Get Shoes"),
  new TodoItem(3, "Collect Tickets"),
  new TodoItem(4, "Call Joe", true),
];

let collection: TodoCollection = new TodoCollection("Steven", todos);
let showCompleted = true;

function displayTodoList(): void {
  console.log(
    `${collection.userName}'s Todo List` +
      `(${collection.getItemCounts().incomplete} items to do)`,
  );
  collection.getTodoItems(showCompleted).forEach((item) => item.printDetails());
}

enum Commands {
  Quit = "Quit",
}

function promptUser(): void {
  console.clear();
  displayTodoList();
  inquier
    .prompt({
      type: "list",
      name: "command",
      message: "Choose option",
      choices: Object.values(Commands),
    })
    .then((answers) => {
      if (answers["command"] !== Commands.Quit) {
        promptUser();
      }
    });
}

promptUser();
