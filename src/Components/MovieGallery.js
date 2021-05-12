import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard'
import '../Assets/MovieGallery.css'

const MovieGallery = ({ movieData, title, recentGallery }) => {
    const [previousMovies, setPreviousMovies] = useState([])
    const [currentMovie, setCurrentMovie] = useState([])

    useEffect(() => {
        setCurrentMovie(movieData)
        setPreviousMovies(previousMovies.concat(movieData))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [movieData]);

    const listOfMovies = previousMovies.map((movie, i) => {
        return <MovieCard {...movie} key={i} />
    })

    const singleMovies = <MovieCard {...currentMovie} />


    let renderMovie = () => (recentGallery === true) ? listOfMovies : singleMovies

    if (previousMovies.length > 3) {
        previousMovies.splice(0, 1)
        setPreviousMovies(previousMovies)
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

export default MovieGallery;