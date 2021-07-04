import React from 'react'
import "./home.css"
import Navbar from './Navbar'

function Home() {
    return (
        <div>
            <div className="pizzaHome">
                <div className="imgCar">
                    
                </div>
                <Navbar/>
                <div className="homeText">
                    <h2 className="t1">We Have The Best</h2>
                    <h2 className="t2">PIZZA</h2>     
                </div>
            </div>
        </div>
    )
}

export default Home
