import React from 'react';
import UseForm from './UseForm'; 
import {Link} from 'react-router-dom'
import validate from './validateInfo'
import labels from '../config/labels';
const LoginSignup=(props)=>{
const{ handleChange,values,handleSubmit,errors}=UseForm(validate);

const {setLoginWithOtp} = props;
   
    const {setDontHavacnt} = props;
    

        return(
            <div className="container white">
            
            <form className="text-box" onSubmit={handleSubmit}>
                    
                <h5 className="Left">Login</h5>
                    <input 
                    type="text" name="username" placeholder="Enter email / Phone number" id="username" value={values.username} onChange={handleChange} required />
                    <p className="message">{labels.LOGINSIGNUP.NEVER_SHARE_YOUR_DETAILS}</p>
                    {errors.username && <p>{errors.username}</p>}
                    
                    <input 
                    type="password" name="password" placeholder="Password" id="password" value={values.password} onChange={handleChange} />
                    <p className="message center">{labels.LOGINSIGNUP.DONT_HAVE_ACCNT}<button onClick={()=>setDontHavacnt()} className="green right" >create now</button></p>
                    {errors.password && <p>{errors.password}</p> }
                     
                   
                     
                     <div>
                     <button  onClick={()=>setLoginWithOtp()}   className="blue darken-3">Login via Otp</button>
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
export default LoginSignup