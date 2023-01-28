import React from 'react'
// import { Link } from "react-router-dom";

function About() {
    return (
    <div className='port-container about-cont'>
        <h1>About Me</h1>
        <div  className='port-cont'>
            <div className='image-box'>
                <img src='https://img.freepik.com/free-photo/young-graphic-designer-working-office_158595-1137.jpg?w=826&t=st=1674777532~exp=1674778132~hmac=dbcd9c93d11385c8d203c81a6b093a821c1ddbc3206c3987011b0a4ea4c2083e' alt='img' />
            </div>
            <div className='text-box'>
                <h1>My name is JEREMIH BROWN</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sapiente rem perspiciatis quasi rerum id necessitatibus, adipisci esse hic aut, eos distinctio eius labore debitis delectus fugiat facilis veniam saepe.....<button className='btn-normal'>READ MORE</button></p>
            </div>
        </div>
    </div>
    )
}

export default About