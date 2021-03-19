import React from "react";
import "./Forecast.css"
import ForecastIcon from "./ForecastIcon"



export default function Forecast(props){
    return (
      <div>
        <div className="weatherButton">
          <button className="dailyButton">Daily Forecast</button>
          <button className="weeklyButton">Weekly Forecast</button>
        </div>
        <div className="forecastInfo">
            <div className="row">
              <div className="col">
                <p className="forecast">Monday</p>
                <ForecastIcon code={props.info.icon}/>
                <p className="text-capitalize">({props.info.description})</p>
                <p><span className="maxTemp">19º</span> |<span className="minTemp">10º</span></p>
              </div>
               <div className="col">
                <p className="forecast">Monday</p>
                <ForecastIcon code={props.info.icon}/>
                <p className="text-capitalize">({props.info.description})</p>
                <p><span className="maxTemp">19º</span> |<span className="minTemp">10º</span></p>
              </div>
               <div className="col">
                <p className="forecast">Monday</p>
                <ForecastIcon code={props.info.icon}/>
                <p className="text-capitalize">({props.info.description})</p>
                <p><span className="maxTemp">19º</span> |<span className="minTemp">10º</span></p>
              </div>
               <div className="col">
                <p className="forecast">Monday</p>
                <ForecastIcon code={props.info.icon}/>
                <p className="text-capitalize">({props.info.description})</p>
                <p><span className="maxTemp">19º</span> |<span className="minTemp">10º</span></p>
              </div>
               <div className="col">
                <p className="forecast">Monday</p>
                <ForecastIcon code={props.info.icon}/>
                <p className="text-capitalize">({props.info.description})</p>
                <p><span className="maxTemp">19º</span> |<span className="minTemp">10º</span></p>
              </div>
            </div>   
      </div>  
    </div>);
}
