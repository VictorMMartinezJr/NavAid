import "./App.css";
import Nav from "./components/Nav";
import QuickLinks from "./components/QuickLinks";

function App() {
  return (
    <div className="app">
      <Nav />
      <img
        className="app__img shadow-xl z-1"
        src={assets.map}
        alt="GTC building A layout"
      />
      <QuickLinks />
    </div>
  );
}
import { assets } from "./assets/assets";

export default App;
