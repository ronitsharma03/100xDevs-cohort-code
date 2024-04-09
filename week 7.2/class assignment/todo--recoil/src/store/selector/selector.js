import { selector } from "recoil";
import { filterAtom, todoListAtom } from "../atom/atoms";


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