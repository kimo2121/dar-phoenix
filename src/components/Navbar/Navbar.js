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
              <Link to="#">123456789</Link>
            </span>
            <span>
              البريد الالكتروني
              <br />
              <Link to="#">e-books@gmail.com</Link>
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
