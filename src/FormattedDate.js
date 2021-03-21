import React from "react";
import "./FormattedDate.css"



export default function FormattedDate(props) {
    let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
    let weekday = days[props.date.getDay()];
    let hours = props.date.getHours();
    if (hours < 10) {
       hours = `0${hours}`;
    }

    let minutes = props.date.getMinutes();
    if (minutes < 10){
        minutes = `0${minutes}`;
    }
    return (<div className="formattedDate"><span>Last updated: {weekday} | {hours}:{minutes}h</span></div>);
}