import React from "react";
import './Weather.css';








export default function Weather(){
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
