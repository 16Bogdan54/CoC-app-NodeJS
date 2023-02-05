// import PlayerProfile from "./components/player/PlayerProfile";

import HomeVillagePlayer from "./statRoutes/HomeVillagePlayer";

function App() {
  // const [state, setState] = useState<Object>(() => {});

  // useEffect(() => {
  //   axios.get("http://localhost:3001/player").then((r) => console.log(r.data));
  // }, []);

  return (
    <div className="App">
      <HomeVillagePlayer />
      {/*<PlayerProfile />*/}
    </div>
  );
}

export default App;
