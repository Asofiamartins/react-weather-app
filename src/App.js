import React from "react";
import SearchForm from "./SearchForm"
import Footer from "./Footer"
import './App.css';




export default  function App() {
  return (
    <div className="App">
      <div className="container">
       <SearchForm defaultCity="Lisbon"/>    
      </div>
      <Footer/>
    </div>
  );
}


