import React from 'react'
import "./home.css"
import pizzavid from '../images/pizzavideo.mp4'
import pizzavid1 from '../images/pizzavideo.webm'
import Navbar from './Navbar'
function Home() {
    return (
        <div>
        <div className="pizzaHome">
             <div  className="VideoPlay">
                <video autoPlay loop muted>
                <source src={pizzavid} type="video/mp4" />
                <source src={pizzavid1} type="video/webm" />
                </video>
                
            </div>
            <Navbar/>
            <div className="homeText">
                    <div className="t1"><h2>We have</h2></div>
                    <div className="t2"><h2>The <span><h2>Best</h2></span> </h2></div>
                    <div className="t3">Pizza</div>
                    <div className="t4">In <span><h2>The City</h2></span></div>
            </div>
        </div>
       
        </div>
    )
}

export default Home
