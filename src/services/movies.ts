import axios from "axios";


export interface IMovie{  
    title: string,
    description: string,
    programType: string,
    images: {
    "Poster Art": {
        url: string,
        width: number,
        height: number
        }
    },
    releaseYear: number
}


export const baseURL = process.env.REACT_APP_URL;
export const getMovies = () => axios.get(`${baseURL}/json/sample.json`);