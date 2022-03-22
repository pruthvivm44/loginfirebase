import React from 'react'
import WCSimage from '../WCSimage.png';
import { Routes, Route } from "react-router-dom"

const Navbar=()=>{
   
   
    return (
        <nav className="nav-wrapper white">
        <div className="container">
        <img className="left" src={WCSimage} alt="A WCSimage" width={55} height={57}/>
        
        <ul className="right">
            <li><a href="/more">More </a></li>
            <li><a href="/login_signup"><button>Login /Sign up</button></a></li>
        </ul>
      </div>
      </nav>
    )
  }


export default Navbar
