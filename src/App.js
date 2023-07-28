import { useState } from 'react';
import './App.css';

import Navbar  from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

function App() {
 const [mode, setMode] = useState('light')
 const [Text, setText] = useState("Dark")
 const TextName=()=> {
  if(mode==='light'){
    setMode('dark')
    setText("Dark")
    document.body.style.backgroundColor='#00425A';
    document.body.style.color='white';
    document.title="TextUtils Dark"
 }
 else{
  setText("Light")
  setMode('light')
  document.body.style.backgroundColor='white';
  document.body.style.color='black';
  document.title="TextUtils Ligh"
 }
  
}

  return (
    <>
  <Router>
    <Navbar title="TextUtils" Abouttext="About Us" Home="HOME" mode={mode} Text={Text} TextName={TextName}/>
    <div className="container">
    <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>  
          {/* <About/>  */}
           <Route exact path="/" element={<TextForm heading="Enter text to Analyze" />}/>
          {/* <TextForm heading="Enter text to Analyze" /> */}
        </Routes>
    </div>
  </Router>
   
    </>
  );
}

export default App;
