import React from 'react';
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {

    const activeStyle = {
        fontWeight: "bold",
        color: "blue",
        TextDecoration: "none",
        marginRight: "10px"
    }

    return (
        <div className="navbar">
            <NavLink activeStyle={activeStyle} to="/home">
                Home
            </NavLink>
            <NavLink to="/about" activeStyle={activeStyle}>
                About
            </NavLink>
            <NavLink activeStyle={activeStyle} to="/Friends">
                Friends
            </NavLink>
        </div>
    );
};

export default Header;