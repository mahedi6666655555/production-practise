import React from "react";
import logo from "..//Header//Logo.svg";

const Header = () => {
  return (
    <div >
      <div className="w-full h-20 bg-gray-800 text-white flex justify-between  items-center px-20">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <a className="pl-5" href="#">Order</a>
          <a className="pl-5" href="#">Order now</a>
          <a className="pl-5" href="#">Manage Inventory</a>
          <a className="pl-5" href="#">log out</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
