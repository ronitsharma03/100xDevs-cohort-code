import { atomFamily } from "recoil";
import { TODOS } from "./todos";

export const todosAtomFamily = atomFamily({ // Instead of having a single atom -> atomfamily is used
  key: 'todosAtomFamily',
  default: id => { // Default value is not single value it is a function that returns the specific todo with the id
    return TODOS.find(x => x.id === id) // If asked for same value it will run the only one time and then the value is 
    // just the cached value
  },
});