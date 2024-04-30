import React, { useRef, useState } from "react";
import "./NavBar.css"; // Import the CSS file
import AnchorLink from "react-anchor-link-smooth-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavBar = ({ isChecked, toggledChecked }) => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div className={`navbar ${isChecked ? "dark-mode" : "light-mode"}`}>
      <div className="logo" onClick={toggledChecked}>
        HP<span className="dot">.</span>
      </div>
      <MenuIcon onClick={openMenu} className="mob-menu-open" />
      <ul ref={menuRef} className="nav-menu">
        <CloseIcon onClick={closeMenu} className="mob-menu-close" />
        <li className="links">
          <AnchorLink
            className={`anchor-like ${isChecked ? "dark-mode" : "light-mode"}`}
            offset={50}
            href="#home"
          >
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <></> : <></>}
        </li>
        <li className="links">
          <AnchorLink
            className={`anchor-like ${isChecked ? "dark-mode" : "light-mode"}`}
            offset={50}
            href="#about"
          >
            <p onClick={() => setMenu("about")}>About me</p>
          </AnchorLink>
          {menu === "about" ? <></> : <></>}
        </li>
        <li className="links">
          <AnchorLink
            className={`anchor-like ${isChecked ? "dark-mode" : "light-mode"}`}
            href="#services"
          >
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? <></> : <></>}
        </li>
        <li className="links">
          <AnchorLink
            className={`anchor-like ${isChecked ? "dark-mode" : "light-mode"}`}
            offset={50}
            href="#mywork"
          >
            <p onClick={() => setMenu("mywork")}>Portfolio</p>
          </AnchorLink>
          {menu === "mywork" ? <></> : <></>}
        </li>
        <li className="links">
          <AnchorLink
            className={`anchor-like ${isChecked ? "dark-mode" : "light-mode"}`}
            offset={50}
            href="#contact"
          >
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <></> : <></>}
        </li>
      </ul>
      <input
        type="checkbox"
        id="dark-mode"
        className="input"
        defaultChecked={isChecked}
        onChange={toggledChecked}
      />
      <label htmlFor="dark-mode" className="label">
        <div className="circle"></div>
      </label>

      <AnchorLink
        className={`nav-connect ${isChecked ? "dark-mode" : "light-mode"}`}
        offset={50}
        href="#contact"
      >
        <div onClick={() => setMenu("contact")} className="hero-connection">
          Connect with me
        </div>
      </AnchorLink>
    </div>
  );
};

export default NavBar;
