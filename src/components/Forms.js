import React,{ Component } from 'react';
class Forms extends Component{
    render(){
        return(
            <div>
                <form className="register-form">
                    <label for="name">Login</label>
                    <input type="text" name="" placeholder="Enter email/Phone number" id="username"></input>
                    <p className="message">We'll never share your email or phone number with anyone else.</p>
                     <input type="password" name="" placeholder="Password" id="password"></input>
                     <p className="message">Don't have an account ? <a href="#">Create now</a></p>
                     </form>
            </div>
        )
    }
}
export default Forms