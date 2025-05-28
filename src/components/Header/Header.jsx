import React from "react";
import "./Header.css";
import avatarImg from "../../assets/avatar.png"; // replace with your avatar image
import { FiBell } from "react-icons/fi"; // Notification icon

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Dashboard</h1>
      <div className="header-right">
        <div className="header-search">
          <input type="text" placeholder="Search..." />
        </div>
        <FiBell className="header-icon" />
        <img src={avatarImg} alt="User Avatar" className="header-avatar" />
      </div>
    </header>
  );
};

export default Header;
