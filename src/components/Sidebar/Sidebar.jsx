import React from "react";
import navigation from "../../data/navigation";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h2>HealthCare</h2>
      </div>
      <ul className="sidebar-menu">
        {navigation.map((item) => (
          <li key={item.id} className="sidebar-item">
            <span className="sidebar-icon">{item.icon}</span>
            <span className="sidebar-label">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
