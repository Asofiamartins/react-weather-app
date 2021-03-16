import React from "react";
import './Weather.css';








export default function Weather(){
    return (
    <div className="weather">
        <div className="weatherDescription">
            <img src="https://i.pinimg.com/564x/eb/62/52/eb6252f58a4c2ff805832627afe53ef1.jpg" alt="Monstera Deliciosa"/>
            <p>description</p>
        </div>
        <div className="weatherInfo">
            <div className="row">
                <div className="col">
                    <h1>22º<span className="units" >C|F</span></h1></div>
                <div className="col"><h2>Lisbon</h2><p>Last update at </p></div>
            </div>
        </div>
    </div>);
}
