import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div style={{ background: "black", height: "120px" }}>
      <div className="buttons">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/about")}>About</button>
        <button onClick={() => navigate("/contact")}>Contact</button>
        <button onClick={() => navigate("/blog")}>Blog</button>
        <button onClick={() => navigate(-1)}>Go Back</button>
        <button onClick={() => navigate(1)}>Go Next</button>
      </div>

      <nav style={{ display: "flex", justifyContent: "space-around" }}>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </nav>
    </div>
  );
};

export default Header;
