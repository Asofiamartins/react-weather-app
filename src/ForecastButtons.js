import React from "react";
import "./ForecastButtons.css"




export default function ForecastButtons(){
    return (
    <div className="weatherButton">
        <button className="dailyButton">Daily Forecast</button>
        <button className="weeklyButton">Weekly Forecast</button>
    </div>
        );
}
