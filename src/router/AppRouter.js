import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultComponent } from "../components/DefaultComponent";
import { Home } from '../components/Home';
import { MovieList } from '../components/MovieList';
import { DetailMovie } from '../components/DetailMovie';
import videosData from '../assets/movies.json';


export const AppRouter = () => {
    return (
        <BrowserRouter>
        <div>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route exact path="/trending-movies" element={<MovieList videosData={videosData}/>}></Route>
                <Route path='/moviedetail/:id' element={<DetailMovie videosData={videosData}/>}></Route>
                <Route path="*" element={<DefaultComponent/>}></Route>
            </Routes>
        </div>
        </BrowserRouter>
    )
};