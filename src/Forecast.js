import React, {useState} from "react";
import axios from "axios"
import "./Forecast.css"
import ForecastPreview from "./ForecastPreview";



export default function Forecast(props){
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function displayForecast(response){
    setForecast(response.data);
    setLoaded(true);
    
  }
  if (loaded && props.city === forecast.city.name) {
    return (<div>
        <div className="weatherButton">
          <button className="dailyButton">Daily Forecast</button>
          <button className="weeklyButton">Weekly Forecast</button>
        </div>
        <div className="forecastInfo row">
        <ForecastPreview data={forecast.list[0]}/> 
        <ForecastPreview data={forecast.list[1]}/>
        <ForecastPreview data={forecast.list[2]}/>
        <ForecastPreview data={forecast.list[3]}/>
        <ForecastPreview data={forecast.list[4]}/>
        </div>
    </div>);
  } else {
  let apiKey="7b07bb1f8b7dcb2a54cfc50f9ead4b60";
  let forecastUrl=`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(forecastUrl).then(displayForecast);

    return null;
      

  }
  
}
