import { Link } from "react-router-dom";
import Hamburger from "/menu_40dp_E8EAED_FILL0_wght400_GRAD0_opsz40.svg";
import Close from '/close.svg'
import Remix from "./Remix";
import { useState } from "react";
function NavBar() {
  const [navState, setNavState] = useState(false);
  const openMobileNav = () => {
    setNavState(!navState);
  };
  const close = () => {
    setNavState(false);
  };

  return (
    <div className="relative">
      <div className="fixed top-0 right-0 left-0 py-5 px-6 h-20 w-full z-20 backdrop-blur-md bg-white/0">
        <div className="flex justify-between items-center mb-[200px]">
          <Link to="/" className=" font-bold text-3xl z-20" onClick={close}>
            ogoluwa
          </Link>

          <ul className="flex justify-center items-center max-md:hidden">
            <li className="mr-8" onClick={close}>
              <Link to="/works">Works</Link>
            </li>
            <li className="mr-8" onClick={close}>
              <Link to="/contact">Contact</Link>
            </li>
            <li className="cursor-pointer" onClick={close}>
              <Remix />
            </li>
          </ul>
          <img
            src={!navState ?  Hamburger : Close}
            className="md:hidden z-20 transition-all"
            onClick={openMobileNav}
          />
        </div>
      </div>
      {navState && (
        <div className="fixed top-[60px] bg-white/0 backdrop-blur-md right-0 left-0 h-[30%] bg-white md:hidden z-30">
          <div className="flex justify-center items-center mt-[50px] z-20">
            <ul className="flex flex-col justify-center items-center">
              <li className="mb-5">
                <Link to="/works" onClick={close}>Works</Link>
              </li>
              <li className="mb-5">
                <Link to="/contact" onClick={close}>Contact</Link>
              </li>
              <li className="cursor-pointer" onClick={close}>
                <Remix />
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
