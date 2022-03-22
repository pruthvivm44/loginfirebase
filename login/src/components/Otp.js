import React from 'react'
import { useState } from 'react'
import UseForm1 from './UseForm1';
import validate1 from './validateInfo1'

const Otp=()=> {
    const{ handleChange,values,handleSubmit,errors}=UseForm1(validate1);
    
  return (
    <div className="container white">
     <form className="text-box" onSubmit={handleSubmit}>
         <h5 className="Left">Login</h5>
         <input type="text-box" name="phonenumber" placeholder="Phone Number" id="phonenumber" value={values.phonenumber} onChange={handleChange}/>
         {errors.phonenumber && <p>{errors.phonenumber}</p>}
         <p></p>
         <div >
             <button className="green darken-4">Send OTP</button>
         </div>
         <p></p>
         <h6 className="center">-------------------------  OR  -------------------------</h6>
         <p></p>
         <div className="center">
         <button className="green darken-4"><a href="/Email">Login with Email</a></button>
     </div>
     </form>
    </div>
  )
}

export default Otp