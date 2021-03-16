import React from "react";
import  "./WeatherDetails.css";





export default function WeatherDetails(){
    return (<div className="WeatherDetails">
        <h3>Details</h3>
        <p>Temperature</p>
        <p>Feels like</p>
        <p>Humidity: 22%</p>
        <p>Wind: 62km/h</p>
    </div>);
}
