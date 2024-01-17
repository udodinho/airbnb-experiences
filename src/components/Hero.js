import React from "react";
import Airbnb from "../img/group.png"

export default function Hero() {
    return (
        <section className="hero">
             <img src={Airbnb} alt="airbnb grid pix" className="group"/>
             <h1 className="hero-header">Online Experiences</h1>
             <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}
