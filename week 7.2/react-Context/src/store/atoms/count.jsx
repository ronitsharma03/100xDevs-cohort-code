import { atom, selector } from "recoil";

export const countAtom = atom({
    key: "countAtom", // needs a identifier key
    default: 0 // The initial value of the atom state as we use the useState(0);
});

// Let's use selectors 
export const evenSelector = selector({
    key: "evenSelector", // needs a key to identify it as the atom
    // A key get which gives a function get
    get: ({get}) => { // It requires a function inside which we get access to a function similar as props and destructured it
        // for simplicity or we can do something like get: (props)=>{
            // const count = props.get(countAtom);
        // }
        // Selectors can depend on any atom and also other selectors
       const count = get(countAtom); // evenSelector depends on count so we have to do get(<State dependant varioable>)
       // Same as the dependancy array in useMemo, useCallback, useEffect
       return count % 2;
    }
})