import React from "react";
import  "./WeatherDetails.css";
import FormattedDate from "./FormattedDate"





export default function WeatherDetails(props){
    function FormattedHours(timestamp){
        let date = new Date (timestamp);
        let hours = date.getHours();
        if (hours < 10) {
       hours = `0${hours}`;
    }

    let minutes =date.getMinutes();
    if (minutes < 10){
        minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}`
}
    
    return (
    <div className="WeatherDetails">
        <h3>Details </h3>
        <div className="row">
                <div className="col">
                    <p>Temperature: {Math.round(props.details.tempmin)} | {Math.round(props.details.tempmax)}ºC</p>
                    <p>Feels like: {Math.round(props.details.feels)}ºC</p>
                    <p>Humidity:  {props.details.humidity}%</p>
                </div>
                <div className="col">
                    <p>Wind: {Math.round(props.details.wind)} km/h</p>
                    <p>Sunrise: {FormattedHours(props.details.sunrise)}h</p>
                    <p>Sunset: {FormattedHours(props.details.sunset)}h</p>
                </div>
               
        </div>
        <FormattedDate date={props.details.date}/>
    </div>);
}
