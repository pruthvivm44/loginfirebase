import React from 'react'
import {Link } from 'react-router-dom'
import labels from '../config/labels'
import UseForm2 from './UseForm2'
import validate2 from './validateInfo2'


const Email=(props)=> {
  const{handleChange,values,handleSubmit,errors}=UseForm2(validate2);

  const {setLoginWithOtp} = props;
    
    
    
  return (
    <div className="container white">
     <form className="text-box" onSubmit={handleSubmit} >
         <h5 className="Left">Login</h5>
         <input type="text-box" name="emailid" placeholder="Email Id" id="emailid" value={values.emailid} onChange={handleChange}/>
         {errors.emailid && <p>{errors.emailid}</p>}
         <div>
            <p></p>
            <input type="text-box password" name="password1" placeholder="Password" id="password1" value={values.password1} onChange={handleChange}/>
            {errors.password1 && <p>{errors.password1}</p>}
            <p></p>
                    <div>
                    <button className="green darken-4">Submit</button>
                    </div>
                    <p></p>
        
        <h6 className="center">{labels.EMAIL.DIVIDER_OR}</h6>
        <p></p>
        <div className="center">
        <button onClick={()=>setLoginWithOtp()} className="green darken-4">Login with OTP</button>
        </div>
        <div className="center">
        <p>{labels.EMAIL.DONT_HAVE_ACCNT} <a href="/"> Register</a></p>
        </div>
        <p></p>
        <div>
                    <Link to='/'>
                        <button className="blue darken-4 right">Close</button>
                        </Link>
                    </div>
        </div>
     </form>
    </div>
  )
}

export default Email