
import './App.css';
import React from 'react';
// import {Home,Login,Signup,UserProfile} from "./Routes/routes.jsx  "
import {Home,Login, Signup, UserProfile} from "./Routes/routes"
// import Home from './pages/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/sign-up' element={<Signup/>}/>
    <Route path='/profile' element={<UserProfile/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;