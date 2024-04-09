import { atom } from "recoil";

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