import React from 'react'
import "./navbar.css"
function Navbar() {
    function clickHandle(){
        console.log("Logout clicked");
    }
  return (
      <>
      <nav className="main-nav">
          <div className="appname">
              <h3>Kabaddi event</h3>
          </div>
          <div className="nav-link">
              <ul>
                  <li>
                      <a href="#">Book Event </a>
                  </li>
                  <li>
                      <a href="#">View Booked event</a>
                  </li>
              </ul>
          </div>
          <div className="logout">
                <button className="logout-btn" onClick={clickHandle}>Logout</button>
          </div>
      </nav>
      <nav className="split-frame"></nav>
      </>
  )
};

export default Navbar
