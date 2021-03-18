import React from "react";
import SearchForm from "./SearchForm"
import Footer from "./Footer"
import './App.css';




export default  function App() {
  return (
    <div className="App">
      <div className="container">
          <div className="row"> 
              <div className="col-5" ></div>
              <div className="col">
              <SearchForm defaultCity="Lisbon"/>
              </div>
          </div>
         
      </div>
      <Footer/>
    </div>
  );
}


