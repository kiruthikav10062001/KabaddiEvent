
import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Search from "./components/Search";



function App() {
  
  return (
    <div className="app">
    
      <Navbar/>
      <Search/>
      
    </div>
    
  );
}

export default App;
