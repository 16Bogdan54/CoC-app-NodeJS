// import PlayerProfile from "./components/player/PlayerProfile";

import HomeVillagePlayer from "./pages/profiles/profilePages/HomeVillage/HomeVillagePlayer";
import AnimatedRoutes from "./routes/AnimatedRoutes";

function App() {
  // const [state, setState] = useState<Object>(() => {});

  // useEffect(() => {
  //   axios.get("http://localhost:3001/player").then((r) => console.log(r.data));
  // }, []);

  return (
    <div className="App">
      {/*<HomeVillagePlayer />*/}
      {/*<PlayerProfile />*/}
      <AnimatedRoutes />
    </div>
  );
}

export default App;
