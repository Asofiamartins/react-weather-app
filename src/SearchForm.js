import React from "react";
import "./SearchForm.css"

export default function SearchForm(){
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
