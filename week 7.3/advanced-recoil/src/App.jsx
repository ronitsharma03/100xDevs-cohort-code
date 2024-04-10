// Advanced recoil //
import { useRecoilValue, RecoilRoot, useRecoilState } from 'recoil'
import { jobsAtom, messagesAtom, networkAtom, notificationAtom } from './atoms'
import { meSelector } from './selector';
import { useMemo } from 'react';

function App() {
  return (
    <RecoilRoot>
      <Buttons />
    </RecoilRoot>
  )
}

function Buttons(){
  const network = useRecoilValue(networkAtom);
  const [messages, setMessagesCount] = useRecoilState(messagesAtom);
  const notifications = useRecoilValue(notificationAtom);
  const jobs = useRecoilValue(jobsAtom);

  // Ugly approach to do the all sum
  // Still you need to use useMemo() hook to make sure this won't be calculated since any of the recoil value changes

  const totalvalues = useMemo(() => {
    return network + notifications + jobs + messages;
  }, [network, notifications, messages, jobs]); // Still an ugly way to do 

  return (
    <>
      <button>Home</button>
      <button>My network ({network >= 100 ? "99+" : network})</button>
      <button>Jobs ({jobs})</button>
      <button>Notification ({notifications})</button>
      <button>Messaging({messages})</button>
      <button onClick={()=>{
        setMessagesCount(c => c + 1)
      }}>Me ({totalvalues})</button>
    </>
  )
}

export default App
