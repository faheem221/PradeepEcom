import React from "react";
import Logo from "../App chunks/Logo";
import Menu from "../App chunks/Menu";
const Header = () => {
  return (
    <div className="absolute top-0 left-0 py-3 z-50 w-full">
      <div className="container flex justify-between items-center">
        <Logo />
        <Menu />
      </div>
    </div>
  );
};

export default Header;
