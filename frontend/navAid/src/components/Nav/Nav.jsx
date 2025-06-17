import { assets } from "../../assets/assets";
import Searchbar from "../Searchbar/Searchbar";
import "./Nav.css";

const Nav = () => {
  return (
    <nav id="nav">
      <img src={assets.logo} alt="logo" className="nav__logo" />
      <Searchbar />
    </nav>
  );
};

export default Nav;
