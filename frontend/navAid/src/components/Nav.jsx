import { assets } from "../assets/assets";
import Searchbar from "./Searchbar";

const Nav = () => {
  return (
    <nav className="h-[10vh] flex justify-between items-center w-full px-4 shadow-xl z-2">
      <img src={assets.logo} alt="logo" className="h-12 w-12" />
      <Searchbar />
    </nav>
  );
};

export default Nav;
