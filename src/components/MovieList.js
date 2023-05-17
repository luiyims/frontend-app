import React from "react";
import { Moviecard } from './Moviecard';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

export const MovieList = ({ videosData }) => {
  return (
    <Container>
      <Row className='px-4 my-5'>
        {videosData.map(video => (
          <Col sm={4}>
            <Moviecard video={video} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}


