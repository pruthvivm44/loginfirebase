import React,{ Component } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Login from './containers/LoginContainers/Login'

import { BrowserRouter,Route,Routes } from 'react-router-dom'


class App extends Component{
  render(){
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar />
    <Routes>
    <Route path="/Login" element={<Login />}/>
   
    </Routes>
    </div>
    </BrowserRouter>
  );
}
}

export default App;
