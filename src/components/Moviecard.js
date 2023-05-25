import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

export const Moviecard = ({ video }) => {

  return (
    < Col sm={3} className="my-2" >
      <div className="video-card position-relative">
        <img src={video.posterUrl} alt={video.title} className='img-fluid ' />
        <div className='position-absolute bottom-0 w-full flex justify-between items-end p-3 z-20'>
          <h2 className='text-white'>{video.title}</h2>
          <Link to={`/moviedetail/${video.id}`} className='btn btn-outline-info'> More detail</Link>
        </div>
      </div>;
    </Col >
  );


}
