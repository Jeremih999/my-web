import React from "react";

function Contacts() {
    return (
        <div className="Contact-cont">
            <h1>Contact Me</h1>
            <h4>By sending me an Email</h4>
            <div className="contact__inputs-cont">
                <input type="text" name="name" placeholder="Your Name" />
                <input type="email" name="email" placeholder="Your Email" />
                <input type="text" name="subject" placeholder="Enter Subject" />
                <textarea cols="50" rows="20" placeholder="Enter Message"></textarea>
                <button className="btn-action">Submit</button>
            </div>
        </div>
    )
}

export default Contacts