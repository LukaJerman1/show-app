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


export const baseURL = "https://show-app-ruby.vercel.app";
export const getMovies = () => axios.get(`${baseURL}/json/sample.json`);