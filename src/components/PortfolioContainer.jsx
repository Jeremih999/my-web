import React from "react";

function PortfolioContainer(props) {
    return (
        <div className="logo-container">
            <img src= {props.src} alt={props.alt} />
            <h2>{props.desc}</h2>
            <button className="btn-action">View</button>
        </div>
    )
}

export default PortfolioContainer