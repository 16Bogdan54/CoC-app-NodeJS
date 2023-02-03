import PlayerProfile from "./components/player/PlayerProfile";

function App() {
  // const [state, setState] = useState<Object>(() => {});

  // useEffect(() => {
  //   axios.get("http://localhost:3001/player").then((r) => console.log(r.data));
  // }, []);

  return (
    <div className="App">
      <PlayerProfile />
    </div>
  );
}

export default App;
