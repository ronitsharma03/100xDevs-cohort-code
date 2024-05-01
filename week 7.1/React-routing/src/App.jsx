import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
// import { Dashboard } from './components/Dashboard'
const Landing = lazy(() => import('./components/Landing'));
const Dashbaord = lazy(() => import('./components/Dashboard'));


function App() {
  return (
    <>
      <BrowserRouter>
        <Appbar />
        <Routes>
          {/*Suspense API*/}
          <Route path="/dashboard" element={<Suspense fallback={"Loading..."}><Dashbaord /></Suspense>} />
          <Route path="/" element={<Suspense fallback={"Loading..."}><Landing /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

const Appbar = () => {
  const navigate = useNavigate();
  return(
    <>
      <button onClick={() => {
        navigate("/dashboard")
      }}>Dashboard</button>
      <button onClick={() => {
        navigate("/")
      }}>Home</button>
    </>
  )
};

export default App
