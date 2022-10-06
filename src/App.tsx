import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Axios from "axios";
import JsonData from "./components/pictures/sample.json"

import Header from './components/Header';
import Footer from './components/Footer'
import Body from './components/Body'
import Tile1 from './components/pictures/movies.jpg'
import { url } from 'inspector';
import Show from './components/Show';

interface Tile {
  id: number;
  name: string;
  picture?: string ;
  
}

let tile1 : Tile={
  id: 1,
  name: "movie",
  picture: require('./components/pictures/movies.jpg')
}

let tile2 : Tile={
  id: 2,
  name: "series",
  picture: require("./components/pictures/series.png")
}

const tiles = [tile1,tile2]

function App() {

  return (

  <Router>

    <Header></Header>

    <Routes>
      <Route path="/" element={<Body elements={tiles}></Body>}></Route>    
      <Route path="/movie" element={<Show showType="movie"></Show>}></Route>
      <Route path="/series" element={<Show showType="series"></Show>}></Route>
    </Routes>

    <Footer></Footer>

  </Router>

  );
}

export default App;