import React from 'react'
import Navbar from './Navbar'
import './about.css'
import abtimage from '../images/abt.png'
import item from '../images/items.jpg'
function About() {
    return (
        <div className="about">
            <Navbar/>
            <div className="abtimg">
                
            </div>
            <div className="title">
            <a  href="#"><img src={abtimage} ></img></a>
            <h2>ABOUT</h2>
            </div>
            <div className="abtc">
                <div>
                    <h2>We Use fresh INGREDIENTS</h2>
                </div>
                <div>
                     <h2>Why is that ?</h2>
                </div>
                <div>
                     <h6 >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                    </h6>
                </div>
            </div>
            <div class="abtk">
               <a  href="#"><img src={item} ></img></a>
            </div>
        </div>
    )
}

export default About
