import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import { MoviecardDetail } from './MoviecardDetail';
import { Container, Row } from 'react-bootstrap';
import { useFindMovie } from "../hooks/useFindMovie";

export const DetailMovie = ({ videosData }) => {

    const { selectedVideo } = useFindMovie({ videosData });

    return (
        <>
            {selectedVideo ? (
                <MoviecardDetail video={selectedVideo} />
            ) : (
                <Container className="container-fluid">
                    <Row>
                        <p className="text-white"><h1>Movie not found!., Please select another movie <Link to='/trending-movies' className='h-full w-full shadow absolute z-10'> Here</Link>
                        </h1></p>
                    </Row>
                </Container>
            )};
        </>
    );

}