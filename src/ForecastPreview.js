import React from "react";
import ForecastIcon from "./ForecastIcon";


export default function ForecastPreview(props){
function hours(){
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
}
function temperature(){
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}ºC`;
}


return (
       <div className="ForecastPreview col">
                <p className="forecast">{hours()}</p>
                <ForecastIcon code={props.data.weather[0].icon}/>
                <p className="text-capitalize">(sun)</p>
                <p><span className="maxTemp">{temperature}</span> </p>
              </div>
               
   
);
}