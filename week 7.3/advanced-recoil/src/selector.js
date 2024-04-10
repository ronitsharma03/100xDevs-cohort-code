import { selector } from "recoil";
import { jobsAtom, messagesAtom, networkAtom, notificationAtom } from "./atoms";

export const meSelector = selector({
    key: "meSelector",
    get: ({get}) =>{
        const network = get(networkAtom);
        const message = get(messagesAtom);
        const notification = get(notificationAtom);
        const jobs = get(jobsAtom);

        return (network + message + notification + jobs);
    }
})