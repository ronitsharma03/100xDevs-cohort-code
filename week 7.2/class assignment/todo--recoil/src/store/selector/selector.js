import { selector } from "recoil";
import { filterAtom, todoListAtom } from "../atom/atoms";


// Selector for the filter todos as the filtered todos will
// depend on the todos and filter
export const filteredTodoListSelector = selector({
    key: "filteredTodoListSelector",
    get: ({ get }) => {
        const todos = get(todoListAtom);
        const filter = get(filterAtom).toLowerCase();

        return todos.filter(
            (todo) =>
                todo.title.toLowerCase().includes(filter) ||
                todo.description.toLowerCase().includes(filter)
        );
    }
})