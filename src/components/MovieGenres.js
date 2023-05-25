import React, { useState,useEffect } from 'react';
import {Genre} from './Genre';

export const MovieGenres = ({ videosData }) => {
    return (
        <div className='w-full bg-[#10141e] md:p-10 mb-20 md:mb-0'>
            <Genre videosData={videosData} />
        </div>
    );
}