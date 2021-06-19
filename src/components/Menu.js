import React, { Component } from 'react'

import Navbar from './Navbar'
import './Menu.css'
import abtimage from '../images/abt.png'
import {Container,Form} from 'react-bootstrap'
import frame from '../images/frame.png'
import pizza from '../images/3.jpg'
class Menu extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             small:99,
             ss:false,
             med:135,
            ms:false,
             lg:159,
             ls:false,
             qty:'',
             total:''
        }
    }
    handleQuantity=(event) =>{
        this.setState({qty:event.target.value});
    }
    
    
    render() {
        
        return (
            <div className="menu">
        <Navbar/>
        <div className="menimg">
            
        </div>
        <div className="title">
        <a  href="#"><img src={abtimage} ></img></a>
        <h2>MENU</h2>
        </div>
           <Container>
              <div className="menuDisplay">
                <div class="pizzacard">
                        <div className="box">
                            <img src={frame}></img>
                            <img className="pizzaimg" src={pizza}></img>
                            
                        </div>
                        <div className="mc">
                         
                            <div>
                                <h2 style={{textAlign:"center",fontWeight:"700",color:"rgb(152, 26, 33)",fontSize:"36px"}}>MARGHERITA</h2>
                                <p>Pepperoni, cheese, black olives, tomatoe sauce, mushrooms, meat, onion, salad</p>
                                <form>
                                    <input type="radio" name="small" value="SMALL" defaultChecked="true" ></input><label>SMALL</label>
                                    <input type="radio" name="small" value="MEDIUM"></input><label>MEDIUM</label>
                                    <input type="radio" name="small" value="LARGE"></input><label>LARGE</label>
                                    <label className="qlabel">QTY:</label>
                                    <input type="number" id="quantity" name="quantity" value={this.state.qty} onChange={this.handleQuantity}  min="1" size="75"></input>
                                    
                                </form>
                                <h4 className="amt">99</h4>
                            </div>
                                
                        </div>
                        
                    </div>
                    
                    <div class="pizzacard">
                        <div className="box">
                            <img src={frame}></img>
                            <img className="pizzaimg" src={pizza}></img>
                            
                        </div>
                    </div>
                    <div class="pizzacard">
                        <div className="box">
                            <img src={frame}></img>
                            <img className="pizzaimg" src={pizza}></img>
                        </div>
                    </div>
                    <div class="pizzacard">
                        <div className="box">
                            <img src={frame}></img>
                            <img className="pizzaimg" src={pizza}></img>
                        </div>
                    </div>
                    
                    
              </div>
              </Container>
                
               
         
    </div>
        )
    }
}

export default Menu
