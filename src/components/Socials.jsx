import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Socials() {
    return (
        <div className="socials-container">
            <FaFacebook  className="fb"/>
            <FaInstagram className="insta" />
            <FaLinkedinIn className="linked" />
            <FaTwitter className="twitter" />
        </div>
    )
}

export default Socials