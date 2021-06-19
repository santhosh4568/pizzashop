import "./navbar.css"
import logo from "../images/l2.png"
import React from 'react'
import { Link } from "react-router-dom"
function Navbar() {
    return (
        
        <nav className="pizzanav">
        <div className="container">
            {/* <div className="logoWrap">
                <a className="logoBrand" href="#"><img src={logo} height="150" width="150" style={{margin:"2px"}}></img></a>
            </div> */}
          
            <div className="navDiv">
            <div className="logoWrap">
                <a className="logoBrand" href="#"><img src={logo} height="150" width="150" style={{margin:"2px"}}></img></a>
            </div>
                <ul className="ull">
                   <Link to={`/`} ><li className="active">Home</li></Link>
                   <Link to={`/about`} ><li >About</li></Link>
                   <Link to={`/menu`} ><li >Menu</li></Link>
                   <Link to={`/contact`} ><li >Contact</li></Link> 
                </ul>
            </div>
        </div>
        </nav>
    )
}

export default Navbar
