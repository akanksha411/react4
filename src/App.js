
import './App.css';
import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Components/Home';
import Students from './Components/Students';
import Contactus from './Components/Contactus';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Students" element={<Students/>}/>
          <Route path="/Contact" element={<Contactus/>}/>
          {/* <Route path="/Edit" element={<Edit/>}/> */}
          {/* <Route path="/Addstudent" element={<Addstudent/>}/> */}
   </Routes>
    </div>
  );
}

export default App;
