// import { useContext } from 'react'
// import { CountContext } from './context'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { countAtom } from './store/atoms/count';

function App() {
  return (
    <>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </>
  )
}

function Count() {
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  // const count = useContext(CountContext);
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}
function Buttons() {
  const [count, setCount] = useRecoilState(countAtom);
  return <div>
    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>
  </div>
}
export default App
