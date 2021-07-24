import React from 'react'
import { Link } from 'react-router-dom';
const Headercompoent = () => {
  return (
    <div>
   <div className="multi-bg-example">
   <h1>Resume builder</h1>
   </div>
   <div style={{color:'white'}}>
   <ul className="nav">
   <li>
     <Link to="/">Home</Link> 
   </li>
   
   <li>
     <Link to="/otplogin">Resume</Link> 
   </li>
   <li>
     <Link to="/contactus">Contact Us</Link> 
   </li>
   <li>
     <Link to="/about">About</Link> 
   </li>
</ul></div>
   </div>
  );
};

export default Headercompoent
