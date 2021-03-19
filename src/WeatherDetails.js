import React from "react";
import  "./WeatherDetails.css";





export default function WeatherDetails(props){
    return (
    <div className="WeatherDetails">
        <h3>Details</h3> 
        <div className="row">
                <div className="col">
                    <p>Temperature: {Math.round(props.details.tempmin)} | {Math.round(props.details.tempmax)}</p>
                    <p>Feels like:</p>
                    <p>Humidity:  {props.details.humidity}</p>
                </div>
                <div className="col">
                    <p>Wind: {props.details.wind} km/h</p>
                    <p>Sunrise:{props.details.sunrise}</p>
                    <p>Sunset {props.details.sunset}</p>
                </div>
               
        </div>
        
    </div>);
}
