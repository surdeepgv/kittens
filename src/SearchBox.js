import React from 'react';
import './Sbox.css';

const SearchBox=({searchfield, searchChange}) => {
    return (
        <div className="pa2">
            <input 
            className="sbox bg-light-yellow"
            type="search"
            placeholder="Search Kittens"
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;