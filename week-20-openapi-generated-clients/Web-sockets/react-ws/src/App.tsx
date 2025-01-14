import { useEffect, useState } from "react";

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");
    socket.onopen = () => {
      console.log("Socket connected");
      setSocket(socket);
    };
    socket.onmessage = (message) => {
      console.log("Received messages: ", message.data);
      setMessages(m => [...m, message.data]);
    };

    return () => {
      socket.close()
    }
  }, []);

  if (!socket) {
    return <div>Connecting to Socket Server...</div>;
  }
  return (
    <div>
      <div>
        <input type="text" onChange={(e) => {
          setInputMessage(e.target.value)
        }}></input>
        <button onClick={() => {
          socket.send(inputMessage);
        }}>Send</button>
      </div>
      <div>
        {"Messages: "} 
        {messages.map((message) => {
          return <div key={Math.random()}>{message}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
