import React from "react";
import Star from "../img/star.jpeg"

export default function Card(props) {
    let cardtext
    if (props.data.openSpots === 0) {
        cardtext = "SOLD OUT"
    } else if (props.data.location === "Online") {
        cardtext = "ONLINE"
    } 

    return (
        <div className="card">
            {cardtext && <div className="card-text">{cardtext}</div> }
            <img src={props.data.coverImg} alt="images" className="card-img" />
            <div className="card-stats">
                <img src={Star}  alt="star" className="star"/>
                <span>{props.data.stats.rating} </span>
                <span className="gray">({props.data.stats.reviewCount}) . </span>
                <span className="gray">{ props.data.location}</span>
            </div>
            <p className="card-title">{props.data.title}</p>
            <p className="card-title"><span className="bold">from ${props.data.price}</span> / person</p>
        </div>
    )
}
