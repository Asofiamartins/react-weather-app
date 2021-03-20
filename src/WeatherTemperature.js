import React , {useState} from "react";
import './WeatherTemperature.css';



export default function WeatherTemperature(props){
const [unit, setUnit]= useState("celsius");

function displayCelsius(event){
event.preventDefault();
setUnit("celsius");
}
function displayFahrenheit(event){
event.preventDefault();
setUnit("fahrenheit");
}

if (unit === `celsius`) {
return (
<div className="WeatherTemperature">
    <h1>
    {Math.round(props.celsius)}º
    <span className="units"><a href="/" onClick={displayCelsius}>C{" "}</a> | <a  href="/" onClick={displayFahrenheit}>{" "}F</a></span>
    </h1>
</div>);
} else {
let fahrenheit = (props.celsius * 9/5) +32;
return (
<div className="WeatherTemperature">
    <h1>
    {Math.round(props.celsius)}º
    <span className="units"><a href="/" onClick={displayCelsius}>C{" "}</a> | <a  href="/" onClick={displayFahrenheit}>{" "}F</a></span>
    </h1>
</div>);
}

}