import React, { useState, createContext } from "react";
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import {MoviesListFilter} from './MoviesListFilter';


export const Genre = ({ videosData }) => {
    const [activegenre, setActiveGenre] = useState(1);
    const filteredMovies = videosData.movies.filter(movie => movie.genres.includes(activegenre));

    return (
        <>
            <Container>
                <Row className='px-4 my-5'>
                    <h1 className="text-white">DevPlay Movies | Genres</h1>
                    <div className='d-flex flex-wrap justify-center px-2 gap-2'>
                        {
                            videosData.genres.map((genre) => (

                                <button
                                    onClick={() =>

                                        setActiveGenre(genre.id)
                                    }
                                    className={activegenre === genre.id ? 'active px-4 py-2 m-2 text-[15px] text-white btn btn-outline-info' : 'btn btn-outline-info'} key={genre.id}>
                                    {genre.name}
                                </button>

                            ))
                        }
                    </div>
                </Row>
                <MoviesListFilter movies={filteredMovies} />

            </Container>
        </>
    )
};
