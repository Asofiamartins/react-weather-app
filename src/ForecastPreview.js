import React from "react";
import ForecastIcon from "./ForecastIcon";


export default function ForecastPreview(props){
function hours(){
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
}

function TemperatureMax(){
    let temperature = Math.round(props.data.main.temp_max);
    
    return `${temperature}ºC`;
}
function TemperatureMin(){
    let temperature = Math.round(props.data.main.temp_min);
    
    return `${temperature}ºC`;
}

return (
       <div className="ForecastPreview col">
                <p className="forecast">{hours()}</p>
                <ForecastIcon code={props.data.weather[0].icon}/>
                <p className="text-capitalize">{(props.data.weather[0].main)}</p>
                <p><span className="TemperatureMax">{TemperatureMax()}</span>|<span className="TemperatureMin">{TemperatureMin()}</span></p>
              </div>
               
   
);
}