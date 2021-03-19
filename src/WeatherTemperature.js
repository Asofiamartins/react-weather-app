import React , {useState} from "react";




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
<h1>{Math.round(props.celsius)}º</h1> <span className="units" >C| <a  href="/" onClick={displayFahrenheit}>F</a></span>
</div>);
} else {
let fahrenheit = (props.celsius * 9/5) +32;
return (
<div className="WeatherTemperature">
<h1>{Math.round(fahrenheit)}º</h1> <span className="units" ><a href="/" onClick={displayCelsius}>C</a>| F </span>
</div>);
}

}