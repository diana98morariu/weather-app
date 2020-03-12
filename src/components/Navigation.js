import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return(
        <div className="navigation">
            <NavLink to="/" style={{ color: 'white', textDecoration: 'none', textTransform: 'uppercase', padding: '10px'}} >Home</NavLink>
            <NavLink to="/about" style={{ color: 'white', textDecoration: 'none', textTransform: 'uppercase', padding: '10px'}} >About</NavLink>
            <NavLink to="/Contact" style={{ color: 'white', textDecoration: 'none', textTransform: 'uppercase', padding: '10px'}} >Contact</NavLink>
        </div>
    );
};

export default Navigation;