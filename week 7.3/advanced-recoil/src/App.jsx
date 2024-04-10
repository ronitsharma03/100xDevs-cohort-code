// Advanced recoil //
import { useRecoilValue, RecoilRoot, useRecoilState } from 'recoil'
import { jobsAtom, messagesAtom, networkAtom, notificationAtom } from './atoms'

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

  return (
    <>
      <button>Home</button>
      <button>My network ({network >= 100 ? "99+" : network})</button>
      <button>Jobs ({jobs})</button>
      <button>Notification ({notifications})</button>
      <button>Messaging({messages})</button>
      <button onClick={()=>{
        setMessagesCount(c => c + 1)
      }}>Me</button>
    </>
  )
}

export default App
