import { Link } from "react-router-dom";
import Hamburger from "/menu_40dp_E8EAED_FILL0_wght400_GRAD0_opsz40.svg";
import Remix from "./Remix";
function NavBar() {
  return (
    <div className="flex justify-between items-center mb-[200px]">
      <Link to="/" className=" font-bold text-3xl">oslo</Link>

      <ul className="flex justify-center items-center max-md:hidden">
        <li className="mr-8">
          <Link to="/works">Works</Link>
        </li>
        <li className="mr-8">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="cursor-pointer">
          <Remix />
        </li>
      </ul>
      <img src={Hamburger} className="md:hidden" />
    </div>
  );
}

export default NavBar;
