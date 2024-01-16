import React from "react";
import AirbnbLogo from "../img/airbnb.jpeg"

export default function Navbar() {
    return (
        <nav className="nav">
            <img src={AirbnbLogo} alt="airbnb logo" className="logo"/>
        </nav>
    )
}
