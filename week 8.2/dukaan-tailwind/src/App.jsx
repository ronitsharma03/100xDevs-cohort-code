import { Cards } from "./components/Cards"
import { Appbar } from "./components/Appbar"
import { Table } from "./components/Table"

function App() {
  return (
    <div>
      <Appbar />
      <Cards />
      <Table status="successfull"/>
    </div>
  )
}

export default App
