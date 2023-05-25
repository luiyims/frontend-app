import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

export const useFindMovie = ({ videosData }) => {
    
    const [selectedVideo, setSelectedVideo] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const video = videosData.movies.find(video => video.id === parseInt(id));
        setSelectedVideo(video);
    }, [id, videosData]);

    return {selectedVideo};
}