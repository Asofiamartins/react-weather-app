import React from "react";
import axios from "axios";
import "./SearchForm.css"

export default function SearchForm(){ 
    
    function handleSearch(){
        consol
    }
    const apiKey =`ad04f0e0df090e6f6edccedb580b7fca`;
    let city ="Lisbon";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSearch);
    return (

        
    <div className="Search">
        <form className="search-form">
        <div className="row">
            <div className="col-7">
                <input className="city-input" type="search" placeholder="The weather in..." autoComplete="off" />
            </div>
            <div className="col">
                <input className="newcity-button" type="submit" value="New city" />
                <input className="currentcity-button" id="currentcity-button" type="submit" value="Current City"/>
            </div>
        </div>
        </form>
    </div>);
}
