import { Link } from "react-router-dom";
import { useState } from "react";

const MobileAside = () => {
  const [open, setOpen] = useState(false);

  const openBurger = () => setOpen(!open);

  const logOut = () => {
    fetch("/auth/logout");
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="mobile-menu">
      <div
        className={open ? "burger-crossed" : "burger-bar"}
        onClick={openBurger}
      >
        <div className="div1" />
        <div className="div2" />
        <div className="div3" />
      </div>
      <div className={open ? "mobile-aside" : "mobile-hidden"}>
        <Link onClick={openBurger} to="/">
          My Forms
        </Link>
        <div onClick={logOut}>LogOut</div>
      </div>
    </div>
  );
};

export default MobileAside;
