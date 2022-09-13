import React from "react";
import "./navbar.css";
import { Search } from "@mui/icons-material";

const Navbar = () => {
  return (
    <div>
      <div className="topbar-container">
        <div className="topbar-left">
          <span className="logo">financial service</span>
        </div>
        <div className="topbar-right">
          <div className="topbar-link">
            <span className="topbar-link">Homepage</span>
            <span className="topbar-link">About</span>
            <span className="topbar-link">Solutions</span>
            <span className="topbar-link">Contact</span>
          </div>
          <div className="search-bar">
            <Search className="search-icon" />
            <input
              className="search-input"
              placeholder="Search for friend, post or video"
            />
          </div>
        </div>
        {/* <div className="topbar-center">
          
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
