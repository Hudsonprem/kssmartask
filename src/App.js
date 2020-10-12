import React, {useState} from 'react';
import './App.css';
import Contacts from "./components/contacts";
import Login from "./components/SignIn/SignIn";
import Register from "./components/SignUp/SignUp";
import Header from "./components/header"

import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [show, setShow] = useState("login");

  function showComponent(componentName) {
    setShow(componentName);
  } 

  function setComponent(componentName) {
    setShow(componentName);
  } 

  const components = {
    "login":      <Login onchange={() => showComponent("register")}  onLogin={() => setComponent("home")}/>,
    "register":  <Register onchange={() => showComponent("login")}/>,
    "home":      <><Header onLogOut={() => setComponent("login")} /> <div className="row" style={{justifyContent: "center" ,backgroundColor: "#0d5449"}}><div className = "col-md-8 "><Contacts /></div> </div></>,
}

  return (
    
       <div>
       
    {components[show]}  

      <div className="custom-shape-divider-bottom-1600971516" style={{backgroundColor: "#0d5449"}}>
                  <div className="custom-shape-divider-bottom-1602490583">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
              </svg>
              </div>
          </div> 
       </div>
      
        
   
  );
}

export default App;
