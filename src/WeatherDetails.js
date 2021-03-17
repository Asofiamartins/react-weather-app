import React from "react";
import  "./WeatherDetails.css";





export default function WeatherDetails(){
    return (<div className="WeatherDetails">
        <h3>Details</h3>
        <div className="row">
        <div className="col"><p>Temperature</p><p>Feels like</p></div>
        <div className="col"><p>Humidity: 22%</p><p>Wind: 62km/h</p></div>
        <div className="col"><p>sunrise</p><p>sunset</p></div>
        </div>
        
    </div>);
}
