
import './App.css';
import React from 'react';
// import {Home,Login,Signup,UserProfile} from "./Routes/routes.jsx  "
import {Home,Login, Signup, UserProfile,Createrecipe} from "./Routes/routes"
// import Home from './pages/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/profile' element={<UserProfile/>}/>
    <Route path='/createrecipe' element={<Createrecipe/>}/>
    </Routes>
    </BrowserRouter>
    // <Header/>
  );
}

export default App;