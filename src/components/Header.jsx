import React from "react";
import { FaDownload } from "react-icons/fa";

function Header() {
    return(
        <header className="header">
            <div className="header-text">
            <h1>Creating <br /> The Perfect  <br /> <span className="span-text">FOR YOUR BRAND</span> </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsum tempore perspiciatis temporibus velit itaque consequuntur voluptate mollitia, maiores incidunt unde, illo excepturi, reiciendis modi doloremque delectus eius alias architecto!</p>
            <div className="btns"><button className="btn-normal">View Portfolio</button> <button className="btn-action">Download CV <FaDownload /></button></div>
            </div>
            
            <div className="image-box">
            <img src="https://img.freepik.com/free-vector/happy-freelancer-with-computer-home-young-man-sitting-armchair-using-laptop-chatting-online-smiling-vector-illustration-distance-work-online-learning-freelance_74855-8401.jpg?w=826&t=st=1674569563~exp=1674570163~hmac=0ea8681d2904f82766c0b84e049216bfce0e51b6971b7a8a667ce7a94ad78e8a" alt="an illustration" />
            </div>
            
        </header>
    )
}

export default Header