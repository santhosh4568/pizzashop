import "./navbar.css"
import logo from "../images/l2.png"
import React from 'react'

function Navbar() {
    return (
        
        <nav className="pizzanav">
        <div className="container">
            <a className="logoBrand"><img src={logo}></img></a>
            <div className="navDiv">
                <ul>
                    <li className="active">Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
        </nav>
    )
}

export default Navbar
