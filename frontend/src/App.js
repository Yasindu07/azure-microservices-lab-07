import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(
      "https://gateway.graypond-109e262d.eastus.azurecontainerapps.io/api/message",
    )
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Error connecting to API"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Azure Microservices Lab</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default App;
