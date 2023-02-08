import Home from "./routes/home/home.component";
import About from "./routes/about/about.component";
// import Services from "./routes/services/services.component";
// import { Route, Routes } from "react-router";
import "./App.scss";

function App() {
  return (
    <div className="app_container">
      <Home />
      <About />
    </div>
  );
};

export default App;
