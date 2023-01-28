import React from "react";
import images from "../Images";
import Img from "./img";

function PortfolioPage() {
    // console.log(images)
    
    return(
        <>
            <select className="tags" >
               <option>ALL</option>
               <option>Brand Design</option>
               <option>Logo Design</option>
               <option>Flyer Design</option>
            </select>

            <div className="portfolio__img-cont">{images.map((img, index) =>{
                  <Img
                     key = {index}
                     src= {img.img}
                     type={img.type}
                  />
            })}</div>
        </>
    )
}

export default PortfolioPage