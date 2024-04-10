import { atom } from "recoil";

// export const networkAtom = atom({
//     key: "networkAtom",
//     default: 178
// });

// export const notificationAtom = atom({
//     key: "notificationAtom",
//     default: 44
// });

// export const jobsAtom = atom({
//     key: "jobsAtom",
//     default: 12
// });

// export const messagesAtom = atom({
//     key: "messagesAtom",
//     default: 0
// });

export const notificationAtom = atom({
    key: "notificationAtom",
    default: {
        network: 0,
        notification: 0,
        jobs: 0,
        messages: 0
    }
});