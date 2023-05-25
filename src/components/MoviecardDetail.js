import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

export const MoviecardDetail = ({ video }) => {

    return <Container className="container-fluid">
        <Row className='justify-content-center flex-grow-0'>
            <Col sm={4} className="my-2">
                <div className="video-card-image text-white">
                    <img src={video.posterUrl} alt={video.title} className='img-fluid ' />
                </div>;
            </Col>
            <Col sm={4} className="my-2">
                <div className="video-card-description text-white">
                    <h1>{video.title}</h1>
                    <p>{video.plot}</p>
                    <p><b className='text-nav'>Director:</b> {video.director}</p>
                    <p><b className='text-nav'>Year:</b> {video.year}</p>
                    <p><b className='text-nav'>Actors:</b> {video.actors}</p>
                </div>;
            </Col>
        </Row>
    </Container>;
}
