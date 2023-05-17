import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

export const MoviecardDetail = ({ video }) => {

    return <Container className="container-fluid">
        <Row className='justify-content-center flex-grow-0'>
            <div className="video-card text-white">
                <img src={video.posterUrl} alt={video.title} className='img-fluid ' />
                <h1>{video.title}</h1>
                <p>{video.plot}</p>
                <p><b>Director:</b>{video.director}</p>
                <p><b>Year:</b>{video.year}</p>
                <p><b>Actors:</b>{video.actors}</p>
            </div>;
        </Row>
    </Container>;
}
