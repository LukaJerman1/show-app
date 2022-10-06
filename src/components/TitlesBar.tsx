import React, { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

function TitlesBar() {

        const location=useLocation();
        let name = location.pathname;

        if(location.pathname =="/"){
            name="Titles"
        }else{
            name=name.substring(1)
        }

    return(
        <div id="titleBar">
            <h2>Popular {name=="Movie"?"Movies":name}</h2>
        </div>
    )
}
export default TitlesBar;