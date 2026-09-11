import { useState } from "react";
import logo from "../assets/images/logo.svg";
import iconMenu from "../assets/images/icon-menu.svg";
import iconClose from "../assets/images/icon-menu-close.svg";
import "./header.css";
const Header = () => {
  const [closeButtonShow, setCloseButtonShow] = useState(false);
  const [menuButtonShow, setMenuButtonShow] = useState(true);
  const handleButtonClose = () => {
    setMenuButtonShow(false);
    setCloseButtonShow(true);
  };
  const handleButtonClosex = () => {
    setCloseButtonShow(false);
    setMenuButtonShow(true);
  };
  return (
    <header>
      <nav className="navbar">
        <section className="brand">
          <a className="" href="/">
            <img className="logo-image" src={logo} alt="logo" />
          </a>
        </section>
        <section className="menu">
          <div className={`mobile-menu ${menuButtonShow ? "" : "hide"}`}>
            <button onClick={handleButtonClose} className={`btn`}>
              <img className="icon-menu" src={iconMenu} alt="icon-menu" />
            </button>
          </div>
          <div
            className={`wrapper ${closeButtonShow === false ? "hide" : "show"}`}
          >
            <div className={`close-buttons`}>
              <a className="close-button" href="#" onClick={handleButtonClosex}>
                <img src={iconClose} alt="close menu" />
              </a>
            </div>
            <div className="menu-list">
              <ul className={""}>
                <li className="">
                  <a className="" href="#">
                    Home
                  </a>
                </li>
                <li className="">
                  <a href="#">News</a>
                </li>
                <li className="">
                  <a className="" href="#">
                    Popular
                  </a>
                </li>
                <li className="">
                  <a className="" href="#">
                    Trending
                  </a>
                </li>
                <li className="">
                  <a className="" href="#">
                    Categories
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </nav>
    </header>
  );
};

export default Header;

{
  /* <nav> */
}
{
  /* brand */
}
{
  /* <div>
          
        </div>

        <div className="menu">
          <div className="mobile-menu">
            
          </div>
          <div className="desktop-menu"></div>
          
          
        </div>
      </nav> */
}
