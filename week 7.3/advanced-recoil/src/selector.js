import { selector } from "recoil";
import { notificationAtom } from "./atoms";
// import { jobsAtom, messagesAtom, networkAtom, notificationAtom } from "./atoms";

// export const meSelector = selector({
//     key: "meSelector",
//     get: ({get}) =>{
//         const network = get(networkAtom);
//         const message = get(messagesAtom);
//         const notification = get(notificationAtom);
//         const jobs = get(jobsAtom);

//         return (network + message + notification + jobs);
//     }
// })

export const totalSelector = selector({
    key: "totalSelector", 
    get: ({get}) => {
        const notificationCount = get(notificationAtom);
        return (notificationCount.network + notificationCount.jobs + notificationCount.messages + notificationCount.notification);
    }
});