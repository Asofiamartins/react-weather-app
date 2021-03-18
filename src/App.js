import './App.css';
import Weather from "./Weather"
import WeatherDetails from "./WeatherDetails"
import SearchForm from "./SearchForm"
import ForecastButtons from "./ForecastButtons"
import Forecast from "./Forecast"
import Footer from "./Footer"


export default  function App() {
  return (
    <div className="App">
      <div className="container">
          <div className="row"> 
              <div className="col-5" >
                <Weather />
              </div>
              <div className="col">
                <SearchForm defaultCity="Lisbon"/>
                <WeatherDetails />
                <ForecastButtons />
                <Forecast />
              </div>
          </div>
         
      </div>
      <Footer/>
    </div>
  );
}


