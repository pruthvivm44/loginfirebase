import React,{ Component } from 'react'
import Navbar from './components/Navbar'
//import More from './components/More'
// import Otp from './components/Otp'
// import Email from './components/Email'
// import LoginSignup from './components/LoginSignup'
import './App.css'
import Login from './containers/LoginContainers/Login'
//import useForm from './component/useForm

import { BrowserRouter,Route,Routes } from 'react-router-dom'


class App extends Component{
  render(){
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar />
    <Routes>
    {/* <Route exact path="/" element={<More />}/> */}
    <Route path="/Login" element={<Login />}/>
    {/* <Route path="/email" element={<Email />}/>
    <Route path="/otp" element={<Otp />}></Route> */}
    </Routes>
    </div>
    </BrowserRouter>
  );
}
}

export default App;
