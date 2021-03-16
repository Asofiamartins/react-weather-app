import './App.css';
import Weather from "./Weather"
import WeatherInfo from "./WeatherInfo"
import SearchForm from "./SearchForm"
import ForecastButtons from "./ForecastButtons"
import Forecast from "./Forecast"
import Footer from "./Footer"


export default App; function App() {
  return (
    <div className="App">
      <div className="container">

            <div className="row"> 

                <div className="col-4" >
                <Weather />
                </div>

                <div className="col">
                <SearchForm />
                <WeatherInfo />
                <ForecastButtons />
                <Forecast />
                </div>
              </div>
           <Footer/>
      </div>
    </div>
  );
}


