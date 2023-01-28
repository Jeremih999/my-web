import React from "react";

function AboutPage() {
    return(
        <div className="about__page-container">
            <div className="image-cont">
            <img src='https://img.freepik.com/free-photo/young-graphic-designer-working-office_158595-1137.jpg?w=826&t=st=1674777532~exp=1674778132~hmac=dbcd9c93d11385c8d203c81a6b093a821c1ddbc3206c3987011b0a4ea4c2083e' alt='img' /> 

            </div>

            <div className="text-box">
            <h1>My name is JEREMIH BROWN</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sapiente rem perspiciatis quasi rerum id necessitatibus, adipisci esse hic aut, eos distinctio eius labore debitis delectus fugiat facilis veniam saepe.</p>
                <p>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sapiente rem perspiciatis quasi rerum id necessitatibus, adipisci esse hic aut, eos distinctio eius labore debitis delectus fugiat facilis veniam saepe.</p>
                <p>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sapiente rem perspiciatis quasi rerum id necessitatibus, adipisci esse hic aut, eos distinctio eius labore debitis delectus fugiat facilis veniam saepe.</p>
            </div>
            <div className="skill-set">
                <h1>My Skill Sets</h1>
                <ul>
                    <li>Adobe Photoshop</li>
                    <li>Adobe Illustrator</li>
                    <li>Adobe InDesign</li>
                    <li>Adobe After Effects</li>
                    <li>Adobe Character Animator</li>
                    <li>Corel Draw</li>
                    <li>Figma</li>
                    <li>Blender</li>
                </ul>
            </div>
        </div>
    )
}

export default AboutPage