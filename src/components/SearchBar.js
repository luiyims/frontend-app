import React, { useState,useEffect } from 'react';
import '../styles/search.css';

export const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
      };

    return (
        <div>
          <input className="search-input" aria-label="search movies"
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search by movie title"
          />
        </div>
      );
};
