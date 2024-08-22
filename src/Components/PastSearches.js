import React, { useEffect, useState } from 'react';
import CurrentMovie from './CurrentMovie'
import '../Assets/pastSearches.css'

const PastSearches = ({ pullData, title, recentGallery }) => {
    const [searchedMovies, setSearchHistory] = useState([]);
    const [currentMovie, setCurrentMovie] = useState(null);

    useEffect(() => {
        setCurrentMovie(pullData);
        setSearchHistory(searchedMovies.concat(pullData));
    }, [pullData]);

    const renderMovie = () => {
        if (recentGallery === true) {
            return searchedMovies.map((movie, i) => (
                <CurrentMovie {...movie} key={i} />
            ));
        } else {
            return currentMovie ? (
                <CurrentMovie {...currentMovie} />
            ) : (
                <p>No results found. Please try a different search.</p>
            );
        }
    };

    if (searchedMovies.length > 3) {
        searchedMovies.splice(0, 1);
        setSearchHistory(searchedMovies);
    }

    return (
        <div>
            <h1 className='title'>{title}</h1>
            <div className='movie-gallery-container'>
                {renderMovie()}
            </div>
        </div>
    );
};

export default PastSearches;
