// import PlayerProfile from "./components/player/PlayerProfile";

import HomeVillagePlayer from "./pages/profiles/profilePages/HomeVillage/HomeVillagePlayer";
import AnimatedRoutes from "./routes/AnimatedRoutes";
import Navbar from "./components/navbar/Navbar";

function App() {
  // const [state, setState] = useState<Object>(() => {});

  // useEffect(() => {
  //   axios.get("http://localhost:3001/player").then((r) => console.log(r.data));
  // }, []);

  return (
    <div className="App">
      <Navbar />
      {/*<HomeVillagePlayer />*/}
      {/*<PlayerProfile />*/}
      <AnimatedRoutes />
    </div>
  );
}

export default App;
