import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Moviecard } from './Moviecard';

export const MoviesListFilter = ({ movies }) => {

    return (
        <Row>
            {movies.map(video => (
                <Moviecard key={video.id} video={video} />
            ))}
        </Row>
    );

}
