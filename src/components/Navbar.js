import React from 'react'
import WCSimage from '../WCSimage.png';

const Navbar=()=>{
   return (
        <nav className="nav-wrapper white">
        <div className="container">
        <img className="left" src={WCSimage} alt="A WCSimage" width={55} height={57}/>
        
        <ul className="right">
            <li><a href="/more">More </a></li>
            <li><a href="/LoginContainer"><button>Login /Sign up</button></a></li>
        </ul>
      </div>
      </nav>
    )
  }


export default Navbar
