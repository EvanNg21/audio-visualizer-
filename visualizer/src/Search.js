import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios'; // Import axios

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`/api/search?q=artist:"${searchQuery}"`);

    
            if (!response.data) {
                throw new Error('Failed to fetch search results');
            } 
    
            setSearchResults(response.data.data);
        } catch (error) {
            console.error('Error fetching search results:', error);
            // Optionally, update state to indicate an error occurred
        }
    };

    return (
        <div className='search-container'>
            {/* Search Bar */}
            <div className='search-bar'>
                <input 
                    type='text' 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)} 
                    placeholder='Search for an artist' 
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            
            {/* Search Results */}
            <div className='search-results'>
                {searchResults.map(song => (
                    <div key={song.id} className='song'>
                        <p>Track: {song.title} Artist: {song.artist.name}</p>
                        <img src={song.album.cover_small} alt={song.title}/>
                    <audio controls>
                        <source src={song.preview} type="audio/mp3" />
                        Your browser does not support the audio element.
                    </audio>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;
