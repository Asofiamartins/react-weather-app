import React from "react";
import FormattedDate from "./FormattedDate";
import './Weather.css';


export default function Weather(props){
   
    return (
    <div className="weather">
        <div className="weatherDescription">
            <img src="img/01.svg" alt="Monstera Deliciosa"/>
            <p className="text-capitalize">{props.data.description}</p>
        </div>
        <div className="weatherInfo">
            <div className="row">
                <div className="col-4">
                    <h1>{Math.round(props.data.temperature)}º<span className="units" >C|F</span></h1></div>
                <div className="col"><h2>{props.data.city}</h2>
                <FormattedDate date={props.data.date}/>
                </div>
            </div>
            
        </div>
    </div>);
}
