// Advanced recoil //
import { useRecoilValue, RecoilRoot, useRecoilState } from 'recoil'
import { notificationAtom } from './atoms'
// import { meSelector } from './selector';
import { useEffect, useCallback } from 'react';
import axios from 'axios';
import { totalSelector } from './selector';

function App() {
  return (
    <RecoilRoot>
      <Buttons />
    </RecoilRoot>
  )
}

function Buttons(){
  // const network = useRecoilValue(networkAtom);
  // const [messages, setMessagesCount] = useRecoilState(messagesAtom);
  // const notifications = useRecoilValue(notificationAtom);
  // const jobs = useRecoilValue(jobsAtom);
   
  // Asynchronous tasks
  // ugly approach
  const [notifications, setNotificationCount] = useRecoilState(notificationAtom);
  const totalNotificationsCount = useRecoilValue(totalSelector);
  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/notifications")
    .then(res => {
      setNotificationCount(res.data)
    })
  }, []);

  // Ugly approach to do the all sum
  // Still you need to use useMemo() hook to make sure this won't be calculated since any of the recoil value changes

  // const totalvalues = useMemo(() => {
  //   return network + notifications + jobs + messages;
  // }, [network, notifications, messages, jobs]); // Still an ugly way to do 

  // const totalNotifications = useRecoilValue(meSelector);
  return (
    <>
      <button>Home</button>
      <button>My network ({notifications.network >= 100 ? "99+" : notifications.network})</button>
      <button>Jobs ({notifications.jobs})</button>
      <button>Notification ({notifications.notifications})</button>
      <button>Messaging({notifications.messaging})</button>
      <button>Me ({totalNotificationsCount})</button>
    </>
  )
}

export default App
