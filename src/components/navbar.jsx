import React from "react";
import {NavLink} from "react-router-dom"
import { FaDownload } from "react-icons/fa";

function NavBar() {
    return (
        <nav className="navbar">
           <div className="nav__links-container">
            <NavLink
             to="/" className = {
                ({isActive})=>(isActive ? "nav-link link-active" : "nav-link")
             }>Home</NavLink>
             <NavLink
             to="Portfolio" className = {
                ({isActive})=>( isActive ? "nav-link link-active" : "nav-link")
             }>Portfolio</NavLink>

            <NavLink
             to="About" className = {
                ({isActive})=>( isActive ? "nav-link link-active" : "nav-link")
             }>About</NavLink>

            <NavLink
             to="Contact" className = {
                ({isActive})=>( isActive ? "nav-link link-active" : "nav-link")
             }>Contact Me</NavLink>
             </div>

             <NavLink><button className="btn-action">Download CV <FaDownload /></button></NavLink>
        </nav>
    )
}

export default NavBar