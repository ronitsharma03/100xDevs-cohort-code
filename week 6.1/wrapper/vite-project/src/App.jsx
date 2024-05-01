function App() {
  return <div>
    <CardWrapper innerComponents={<TextComponent/>} />
  </div>
}

function TextComponent() {
  return <div>
    Hi There
  </div>
}

function CardWrapper({ innerComponents }) {
  return <div style={{
    padding: 20,
    border: "2px solid black"
  }}>
    {innerComponents}
  </div>
}
export default App
