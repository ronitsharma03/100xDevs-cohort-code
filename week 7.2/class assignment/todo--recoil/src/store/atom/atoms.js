import { atom } from "recoil";

 // Atoms for todolist, todoinput and todofilter states
export const todoListAtom = atom({
    key: "todoTitleAtom",
    default: []
});

export const todoInputAtom = atom({
    key: "todoInputAtom",
    default: {
        title: "",
        description: ""
    }
});

export const filterAtom = atom({
    key: "filterAtom",
    default: ""
})