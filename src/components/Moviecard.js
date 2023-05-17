import React from 'react';
import { Link } from 'react-router-dom'

export const Moviecard = ({ video }) => {
  
  return <div className="video-card">
      <img src={video.posterUrl} alt={video.title} className='img-fluid '/>
      <h3>{video.title}</h3>
      <Link to={`/moviedetail/${video.id}`} className='h-full w-full shadow absolute z-10'> More detail</Link>
    </div>;
}
