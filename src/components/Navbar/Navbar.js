import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { linksdata } from "./Data";
import { changeLink } from "../../redux/navbar/navbar.actions";
import { useDispatch, useSelector } from "react-redux";
import NavBurgerMenu from "./NavBurgerMenu";
import Logo from "../../assets/logo2.png";

const Navbar = () => {
  const changeLinkDispatcher = useDispatch();
  const activeLink = useSelector((state) => state.navbar.activeLink);

  return (
    <div className="nav-bar">
      <NavBurgerMenu className="burger-menu-component" />
      <div className="noraml-nav">
        <div className="nav-bar-header">
          <Link className="logo-pic" to="/">
            <img src={Logo} alt="" />
          </Link>
          <div className="email-number">
            <span>
              اتصل بنا علي
              <br />
              <a target="_blank" href="https://wa.me/966596506866">
                966596506866+
              </a>
            </span>
            <span>
              البريد الالكتروني
              <br />
              <a
                target="_blank"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=DarPhoniex@gmail.com"
              >
                DarPhoniex@gmail.com
              </a>
            </span>
          </div>
        </div>
        <div className="nav-bar-links">
          {linksdata.map((item, indx) => (
            <Link
              className={activeLink === item.name ? "active-link" : undefined}
              onClick={() => changeLinkDispatcher(changeLink(item.name))}
              key={indx}
              to={item.to}
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
