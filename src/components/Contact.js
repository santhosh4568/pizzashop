import React from 'react'
import Navbar from './Navbar'
import './contact.css'
import abtimage from '../images/abt.png'
import {GrUserWorker} from 'react-icons/gr'
import {FaPhoneAlt} from 'react-icons/fa'
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
            <div className="contact-text">
                <div className="varthan">
                    <h2><GrUserWorker/> Vishnu Varthan</h2>
                    <p className="phonenumber"><FaPhoneAlt/> 6380741894</p>
                </div>
                <div className="varthan">
                    <h2><GrUserWorker/> Santhosh P</h2>
                    <p className="phonenumber"><FaPhoneAlt/> 7010052242</p>
                </div>
                <div className="varthan">
                    <h2><GrUserWorker/> Vishnu Priyan</h2>
                    <p className="phonenumber"><FaPhoneAlt/> 6369031601</p>
                </div>
            </div>
            <div className="center">
                <h4 className="del">FASTER DELIVERY</h4>
            </div>
        </div>
    )
}

export default Contact
