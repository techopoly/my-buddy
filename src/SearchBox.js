import React from 'react';
import './searchBox.css';
import './index.css';

const SearchBox = ({ searchChange }) => {
    return (
        <form className="search-bar">
            <input type="search" name="search" pattern=".*\S.*" required  onChange={searchChange}/>
            <button className="search-btn" type="submit">
                <span>Search</span>
            </button>
        </form>
    );
}


export default SearchBox;