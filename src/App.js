import React,{ Component } from 'react'
import Navbar from './components/Navbar'
import More from './components/More'
import Otp from './components/Otp'
import Email from './components/Email'
import Login_Signup from './components/Login_Signup'
import './App.css'
//import useForm from './component/useForm'

import { BrowserRouter,Route,Routes } from 'react-router-dom'


class App extends Component{
  render(){
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar />
    <Routes>
    {/* <Route exact path="/" element={<More />}/> */}
    <Route path="/login_signup" element={<Login_Signup />}/>
    <Route path="/email" element={<Email />}/>
    <Route path="/otp" element={<Otp />}></Route>
    </Routes>
    </div>
    </BrowserRouter>
  );
}
}

export default App;
