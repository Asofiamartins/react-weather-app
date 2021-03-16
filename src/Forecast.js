import React from "react";
import "./Forecast.css"




export default function Forecast(){
    return (
    <div className="forecastInfo">
      <div className="row">
            <div className="col">
              <p>Monday</p>
             <img src="img/01.svg" alt="Monstera Deliciosa"/>
            <p>19º | 10º</p>
            </div>
            <div className="col">
              <p>Monday</p>
             <img src="img/01.svg" alt="Monstera Deliciosa"/>
            <p>19º | 10º</p>
            </div>
            <div className="col">
              <p>Monday</p>
             <img src="img/01.svg" alt="Monstera Deliciosa"/>
            <p><span className="maxTemp">19º</span> |<span className="minTemp">10º</span></p>
            </div>
            <div className="col">
              <p>Monday</p>
             <img src="img/01.svg" alt="Monstera Deliciosa"/>
            <p>19º | 10º</p>
            </div>
            <div className="col">
              <p>Monday</p>
             <img src="img/01.svg" alt="Monstera Deliciosa"/>
            <p>19º | 10º</p>
            </div>
            
      </div>  
    </div>);
}
