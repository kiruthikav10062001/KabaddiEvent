import React,{useState} from 'react'
import "./navbar.css"

function Navbar() {
    
    function clickHandle(){
        console.log("Logout clicked");
    }
  return (
      <>
      <nav className="main-nav">
          <div className="appname">
              <span>K</span>abaddi
              <span>E</span> vent
          </div>
          <div className="nav-link">
              <ul>
                  <li>
                      <a href="#">BookEvent </a>
                  </li>
                  <li>
                      <a href="#">BookedEvent</a>
                  </li>
              </ul>
          </div>
          <div className="logout">
                <button className="logout-btn" onClick={clickHandle}>Logout</button>
          </div>
      </nav>
      
      </>
  )
};

export default Navbar
