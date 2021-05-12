import React, { useEffect, useState } from 'react';
import CurrentMovie from './CurrentMovie'
import '../Assets/pastSearches.css'

const PastSearches = ({ pullData, title, recentGallery }) => {
    const [searchedMovies, setSearchHistory] = useState([])
    const [currentMovie, setCurrentMovie] = useState([])

    useEffect(() => {
        setCurrentMovie(pullData)
        setSearchHistory(searchedMovies.concat(pullData))
        
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pullData]);

    const historyGallery = searchedMovies.map((movie, i) => {
        return <CurrentMovie {...movie} key={i} />
    })

    const singleMovies = <CurrentMovie {...currentMovie} />


    let renderMovie = () => (recentGallery === true) ? historyGallery : singleMovies

    if (searchedMovies.length > 3) {
        searchedMovies.splice(0, 1)
        setSearchHistory(searchedMovies)
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