import React, { useState,useEffect } from 'react';
import { Moviecard } from './Moviecard';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import '../styles/search.css';

export const MovieList = ({ videosData }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredMovies = videosData.movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container>
      <Row>
        <div className="text-center d-flex justify-content-center">
          <div>
            <input className="search-input" aria-label="search movies"
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search by movie title"
            />
          </div>
        </div>

      </Row>
      <Row className='px-4 my-5'>
        {filteredMovies.map(video => (
          <Moviecard video={video} />
        ))}
      </Row>
    </Container>
  );
}


