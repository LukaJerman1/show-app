import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import JsonData from "./pictures/sample.json";
import TitlesBar from "./TitlesBar";
import axios from "axios";
import { resolve } from 'node:path/win32';

import { getMovies as getShows, IMovie } from '../services/movies';

interface ShowProps{
    showType : "movie" | "series"
}

function Show(props:ShowProps){

    const [loading, setLoading] = React.useState(true);
    const [movies, setMovies] = React.useState<IMovie[]>([])
    const [error,setError] = React.useState(false);

    const jsonDataLoading = "Loading..."
    const jsonDataError = "Oops, something went wrong."

    useEffect(() => {
        void renderShows(props.showType)
        
    }, []);

    const renderShows = async (show: "movie" | "series") =>{
        try{
            const fetchMovies = await getShows();
            const filtered = fetchMovies.data.entries
            .filter((movie:any) => movie.releaseYear>=2010 && movie.programType==show)
            .slice(0,21)
            .sort(comparator);
    
            setMovies(filtered);
            setLoading(false);
        }catch{
            setError(true)
        }
        
    }

      const comparator = (a:IMovie, b:IMovie) => {
        return a.title.toString().localeCompare(b.title.toString(), 'en', { numeric: true })
      };

    return(
        <div className="container">
        {
            error?jsonDataError:

            loading?jsonDataLoading:

            movies.map((record,index) =>{
                return(
                    <div className="box" key={index}>
                        <div>
                        <img src={(record.images['Poster Art'].url)} height="150" width="100"/>
                        </div>
                        <div>
                        {record.title}
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
}

export default Show;