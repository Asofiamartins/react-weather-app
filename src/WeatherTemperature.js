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
    <span className="currentTemperature">{Math.round(props.celsius)}</span>
    <span className="units">
        <a href="/" onClick={displayCelsius} className="active">ºC</a>
        {" "}|{" "}
        <a  href="/" onClick={displayFahrenheit}>ºF</a>
    </span>
    
</div>);
} else {
let fahrenheit = (props.celsius * 9/5) +32;
return (
<div className="WeatherTemperature">
    <span className="currentTemperature">{Math.round(fahrenheit)}</span>
    <span className="units">
        <a href="/" onClick={displayCelsius}>ºC</a>
        {" "}|{" "}
        <a  href="/" onClick={displayFahrenheit} className="active">ºF</a>
    </span>
    
</div>);
}

}