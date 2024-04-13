import { RevenueCard } from "./components/RevenueCard"

function App() {
  return (
      <>
        <RevenueCard title="Amount Pending " orderCount="21" amount="₹ 92,312.20" />
        <RevenueCard title="Amount Processed " orderCount="" amount="₹ 23,92,312.19" />
      </>
  )
}

export default App
