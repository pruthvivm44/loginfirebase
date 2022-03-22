import React from 'react';
import UseForm from './UseForm'; 
import {Link,NavLink} from 'react-router-dom'
//import Otp from './Otp';
import validate from './validateInfo'
const Login_Signup=()=>{
const{ handleChange,values,handleSubmit,errors}=UseForm(validate);



        return(
            <div className="container white">
            
            <form className="text-box" onSubmit={handleSubmit}>
                    
                <h5 className="Left">Login</h5>
                    <input 
                    type="text" name="username" placeholder="Enter email / Phone number" id="username" value={values.username} onChange={handleChange} required />
                    <p className="message">We'll never share your email or phone number with anyone else.</p>
                    {errors.username && <p>{errors.username}</p>}
                    
                    <input 
                    type="password" name="password" placeholder="Password" id="password" value={values.password} onChange={handleChange} />
                    <p className="message center">Don't have an account ? <a href="/Email">Create now</a></p>
                    {errors.password && <p>{errors.password}</p> }
                     
                     {/* <div>
                        <input 
                        type="radio center" value="" name="show password" /> Show password
                     </div> */}
                     
                     <div>
                        <input
                        type="checkbox" /> <span>Login via OTP</span>
                    </div>
                           
                            <button className="green darken-4 ">Submit</button>
                    
                    <div>
                    <Link to='/'>
                        <button className="blue darken-3 right">Close</button>
                        </Link>
                    </div>
        </form>
    </div>
        )
    }
export default Login_Signup