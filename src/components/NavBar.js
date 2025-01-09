import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

function NavBar() {
    const nav = useNavigate();



    return (
        <div className="navbar">
            {/*The below should be buttons to navigate between screen */}
            {/*<div>HOME | PRODUCTS | ABOUT</div>*/}
            {/*Added the routings to the selected pages*/}
            <button className={"nav-bar_button"} onClick={() => nav(`/`)}>Home</button>
            <button className={"nav-bar_button"} onClick={() => nav(`/products`)}>Products</button>
            <button className={"nav-bar_button"} onClick={() => nav(`/about`)}>About</button>
        </div>
    );
}

export default NavBar;