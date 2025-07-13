import { useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    try {
      const res = await axios.post(
        "https://krishnanand.app.n8n.cloud/webhook-test/201856d7-6279-47bc-a2ce-f413ce704228", // 👈 Replace this with your actual webhook URL
        { message }
      );
      setResponse(res.data);
    } catch (error) {
      setResponse("Error connecting to AI agent.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        margin: "2rem auto",
        fontFamily: "sans-serif",
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)", // dark background
        color: "white", // white text
        padding: "2rem",
        borderRadius: "10px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>AI Agent Chat</h1>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows="3"
        placeholder="Type your message..."
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "1rem",
          borderRadius: "20px",
        }}
      />
      <button
        onClick={sendMessage}
        style={{
          padding: "10px 20px",
          background: "#ff4081", // pinkish button
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Send
      </button>
      <div
        style={{
          marginTop: "2rem",
          padding: "10px",
          background: "#333",
          color: "white",
          borderRadius: "8px",
        }}
      >
        <strong>Response:</strong>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default App;
