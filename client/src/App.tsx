import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState<Object>(() => {});

  useEffect(() => {
    axios.get("http://localhost:3001/player").then((r) => console.log(r.data));
  }, []);

  return (
    <div className="App">
      <h1 className="text-red-300 text-3xl font-bold underline"></h1>
    </div>
  );
}

export default App;
