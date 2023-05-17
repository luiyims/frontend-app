import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';

export const useFindMovie = ({ videosData }) => {
    
    const [selectedVideo, setSelectedVideo] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const video = videosData.find(video => video.id === parseInt(id));
        setSelectedVideo(video);
    }, [id, videosData]);

    return {selectedVideo};
}