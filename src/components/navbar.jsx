import React from "react";
import {navLink} from "react-router-dom"
import { FaDownload } from "react-icons/fa";

function NavBar() {
    return (
        <nav className="navbar">
           <div className="nav__links-container">
            <navLink
             to="/" className = {
                ({isActive})=>(isActive ? "link-active" : "nav-link")
             }>Home</navLink>
             <navLink
             to="Portfolio" className = {
                ({isActive})=>( isActive ? "link-active" : "nav-link")
             }>Portfolio</navLink>

            <navLink
             to="About" className = {
                ({isActive})=>( isActive ? "link-active" : "nav-link")
             }>About</navLink>

            <navLink
             to="Contact" className = {
                ({isActive})=>( isActive ? "link-active" : "nav-link")
             }>Contact Me</navLink>
             </div>

             <navLink
             to="Contact" className = {
                ({isActive})=>( isActive ? "link-active" : "nav-link")
             }><button className="btn-action">Download CV <FaDownload /></button></navLink>
        </nav>
    )
}

export default NavBar