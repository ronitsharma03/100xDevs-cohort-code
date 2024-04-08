// import { useContext } from 'react'
// import { CountContext } from './context'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom } from './store/atoms/count';
import { useMemo } from 'react';

function App() {

  return (
    <>
      {/* // The component that uses the recoil root should be inside a <RecoilRoot></RecoilRoot> wrapper component
    // That recoil provides as in context API <Context.provider></Context.provider> was given */}
      <RecoilRoot>
        <Count />

      </RecoilRoot>
    </>
  )
}

function Count() {
  console.log("re-render trigerred");
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
    <EvenCountRenderer />
  </div>
}
function EvenCountRenderer() {
  const count = useRecoilValue(countAtom);
  console.log("EvenButton re-renders")
  // Here the count % 2 == 0 -> is a derieved state and we should not use it the used below
  // for optimized approach use useMemo
  // const isEven = useMemo(()=>{
  //      return (count % 2 == 0);
  // }, [count])
  // this will ensure that the EvenCountRenderer only rerenders on count dependency change
  const isEven = useMemo(()=>{
    return (count % 2 == 0)
  }, [count]) // Better approach
  return <div>
    {
      // (count % 2 == 0) ? "It is even" : null
      isEven ? "It is even" : null
    }
  </div>
}
function Buttons() {
  // To make it more performant we ca stop the re-rendering of button components
  // For this, here we just need setCount and not count and using count causes re-renders so we are just using setCount
  // for using setCount only use another hook recoil provides useSetRecoilState() that enable sot set just state
  // And dont provide any state variable
  const setCount = useSetRecoilState(countAtom);
  console.log("Button re-render trigerred");

  return <div>
    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>
  </div>
}
export default App
