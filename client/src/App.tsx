import AnimatedRoutes from "./routes/AnimatedRoutes";
import MainNavbar from "src/components/navbar/MainNavbar";
import { Container } from "@mui/material";

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <Container>
        <AnimatedRoutes />
      </Container>
    </div>
  );
}

export default App;
