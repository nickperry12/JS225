/*
We'll build a simple todo list program using the techniques we've seen in this
assignment. Write a makeList function that returns a new function that
implements a todo list. The returned function should have the following
behavior:

- When called with an argument that is not already on the list, it adds that
  argument to the list.
- When called with an argument that is already on the list, it removes the
  element from the list.
- When called without arguments, it logs all items on the list. If the list is
  empty, it logs an appropriate message.

Refactored:

Reimplement `makeList`, so that it returns an Object that provides the interface
shown above, including `add`, `list`, and `remove` methods.
*/
function makeList() {
  let todos = [];

  let todoList = {
    add(todo) {
      let idx = todos.indexOf(todo)

      if (idx === -1) {
        todos.push(todo);
        console.log(`${todo} added!`);
      } else {
        console.log('Todo already exists!');
      }
    },

    remove(todo) {
      let idx = todos.indexOf(todo);
      if (idx !== -1) {
        todos.splice(idx, 1);
        console.log(`${todo} removed!`)
      } else {
        console.log('No such todo exists!');
      }
    },

    list() {
      if (todos.length === 0) {
        console.log('The list is empty!');
        return;
      }
      todos.forEach(todo => console.log(todo));
    }
  }

  return todoList;
}

let list = makeList();
list.add('peas');
// peas added!
list.list();
// peas
list.add('corn');
// corn added!
list.list();
// peas
// corn
list.remove('peas');
// peas removed!
list.list();
// corn