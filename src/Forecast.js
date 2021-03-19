import React from "react";
import "./Forecast.css"




export default function Forecast(){
    return (
      <div>
        <div className="weatherButton">
          <button className="dailyButton">Daily Forecast</button>
          <button className="weeklyButton">Weekly Forecast</button>
        </div>
        <div className="forecastInfo">
            <div className="row">
              <div className="col">
                <p>Monday</p>
                 <img src="img/01d.png" alt="Monstera Deliciosa"/>
                <p>19º | 10º</p>
              </div>
              <div className="col">
                <p>Monday</p>
                <img src="img/01n.png" alt="Monstera Deliciosa"/>
                <p>19º | 10º</p>
              </div>
              <div className="col">
                  <p>Monday</p>
                  <img src="img/01n.png" alt="Monstera Deliciosa"/>
                  <p><span className="maxTemp">19º</span> |<span className="minTemp">10º</span></p>
                </div>
              <div className="col">
                  <p>Monday</p>
                  <img src="img/01d.png" alt="Monstera Deliciosa"/>
                  <p>19º | 10º</p>
              </div>
              <div className="col">
                  <p>Monday</p>
                  <img src="img/01n.png" alt="Monstera Deliciosa"/>
                  <p>19º | 10º</p>
              </div>
            </div>   
      </div>  
    </div>);
}
