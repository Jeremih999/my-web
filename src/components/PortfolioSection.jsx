import React from "react";
import PortfolioContainer from "./PortfolioContainer";

function PortfolioSection() {
    return (
        <div className="port-container">
            <h1>MY PORTFOLIO</h1>
            <div className="port-cont">
           <PortfolioContainer
           src="https://img.freepik.com/free-vector/isometric-with-people-working-new-brand-strategy-3d-illustration_1284-63994.jpg?w=740&t=st=1674605020~exp=1674605620~hmac=71549c5cc921bbcb486fd262946bd968f0b5ca92f3608a39faa7acad81ffa833"
           alt= "illustration"
           desc= "Full Brand Design"
            />

           <PortfolioContainer
           src="https://img.freepik.com/free-vector/flower-shop-logo-template-branding-identity-corporate-design_460848-13911.jpg?w=740&t=st=1674605194~exp=1674605794~hmac=71eccf8d8ac23e5b4d4be05bced89cf8f3733c17c7b90fee69afd1d6ad10773f"
           alt= "illustration"
           desc= "Logo Design"
            />
            </div>
        </div>
    )
}

export default PortfolioSection