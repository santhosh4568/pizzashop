import React from 'react'
import Navbar from './Navbar'
import './contact.css'
import abtimage from '../images/abt.png'
function Contact() {
    return (
        <div className="about">
            <Navbar/>
            <div className="abtimg">
                
            </div>
            <div className="title">
            <a  href="#"><img src={abtimage} ></img></a>
            <h2>CONTACT</h2>
            </div>
            
        </div>
    )
}

export default Contact
