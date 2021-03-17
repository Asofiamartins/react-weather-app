import React from "react";
import axios from "axios";
import './Weather.css';








export default function Weather(){
    const apiKey =`ad04f0e0df090e6f6edccedb580b7fca`;
    let city ="Lisbon";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    return (
    <div className="weather">
        <div className="weatherDescription">
            <img src="img/01.svg" alt="Monstera Deliciosa"/>
            <p>description</p>
        </div>
        <div className="weatherInfo">
            <div className="row">
                <div className="col">
                    <h1>22º<span className="units" >C|F</span></h1></div>
                <div className="col"><h2>Amesterdão</h2><p>Last update at </p></div>
            </div>
        </div>
    </div>);
}
