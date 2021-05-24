import React, { useState } from "react";
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import "./NavBurgerMenu.css";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { linksdata, linksdata2 } from "./Data";
import { changeLink } from "../../redux/navbar/navbar.actions";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../assets/logo3.png";
import { IconContext } from "react-icons";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import whatsapp from "../../assets/whatsapp.png";

function NavBurgerMenu() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const changeLinkDispatcher = useDispatch();
  const activeLink = useSelector((state) => state.navbar.activeLink);

  return (
    <>
      <IconContext.Provider value={{ color: "rgb(0, 0, 0)" }}>
        {sidebar && <div className="backdrop"></div>}
        <div className="burger-menu-component">
          <Link className="logo-pic" to="/">
            <img src={Logo} alt="" />
          </Link>
          <div className="navbar">
            <FiIcons.FiMenu
              onClick={showSidebar}
              className="burger-icon"
              color="white"
              size={25}
            />
          </div>
          <nav className={sidebar ? "burger-menu active" : "burger-menu"}>
            <AiIcons.AiOutlineClose
              onClick={showSidebar}
              className={sidebar ? "x-icon active" : "x-icon"}
              size="25"
            />

            <div className="burger-nav-links">
              {linksdata.map((item, indx) => (
                <Link
                  className={
                    activeLink === item.name ? "active-burger-link" : undefined
                  }
                  onClick={() => {
                    changeLinkDispatcher(changeLink(item.name));
                    showSidebar();
                  }}
                  key={indx}
                  to={item.to}
                >
                  {item.text}
                </Link>
              ))}
            </div>
            <div className="inside-burger-menu">
              <Link to="#">
                <img src={facebook} alt="" />
              </Link>
              <Link to="#">
                <img src={instagram} alt="" />
              </Link>
              <Link to="#">
                <img src={twitter} alt="" />
              </Link>
              <Link to="#">
                <img src={youtube} alt="" />
              </Link>
              <Link to="#">
                <img src={whatsapp} alt="" />
              </Link>
            </div>
          </nav>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default NavBurgerMenu;
