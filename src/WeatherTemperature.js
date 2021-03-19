import React from "react";




export default function WeatherTemperature(props){

return (
<div className="WeatherTemperature">
<h1>{Math.round(props.celsius)}º</h1> <span className="units" >C|F</span>
</div>
);}