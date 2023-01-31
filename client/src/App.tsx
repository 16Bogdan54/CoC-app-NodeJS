import axios from "axios";

function App() {

    axios.get('http://localhost:3001').then(r => console.log(r));

  return (
    <div className="App">
      <h1 className="text-red-300 text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  )
}

export default App
