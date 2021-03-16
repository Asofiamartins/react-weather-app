import React from "react";





export default function SearchForm(){
    return (<div>
        <div className="row">
        <div className="col"><form>
            <input type="search" placeholder="The weather in..."
            autoComplete="off"/>
        </form></div>
        <div className="col">
            <input class="newcity-button" type="submit" value="New city" />
              <input
                class="currentcity-button"
                id="currentcity-button"
                type="submit"
                value="Current City"
              />
        </div>
        </div>
        
    </div>);
}
