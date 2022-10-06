import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TitlesBar from "./TitlesBar"

interface HeaderProps{
    title:string | undefined;
}


function Header(){

    const [title, setTitle] = React.useState<string>();

    return(
        <div className="head">
            <div id="header">

                <div id="title"><h1>DEMO Streaming</h1></div><div id="buttons"><button>Log In</button><button>Start your free trial</button></div>
                
            </div>
            <TitlesBar ></TitlesBar>
        </div>
    )
}

export default Header;