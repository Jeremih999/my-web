import React from "react";
import images from "../Images";
import Img from "./img";
import { Link } from "react-router-dom";

function createImg(img, index){
    return (
    <Link to={`portfolio/${index}`} >
        <Img
        key = {index}
        src= {img.img}
        type={img.type}
        />
    </Link>
    )
}

function PortfolioPage() {
    // console.log(images)
    
    return(
        <div className="portfolio-container">
            <select className="tags" >
               <option>ALL</option>
               <option>Brand Design</option>
               <option>Logo Design</option>
               <option>Flyer Design</option>
            </select>

            <div className="portfolio__img-cont">{images.map(createImg)}</div>
        </div>
    )
}

export default PortfolioPage