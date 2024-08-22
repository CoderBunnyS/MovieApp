import React from 'react';
import Ratings from './Ratings';
import '../Assets/CurrentMovie.css';

const CurrentMovie = ({ Poster, Title, Plot, Released, imdbRating }) => {
    return (
        <div className="movie">
            <img src={Poster} alt={Title} />
            <h1>{Title}</h1>
            <p>{Plot}</p>
            <div className='ratings-container'>
                <div className='ratings-text'>
                    <p>Released Date: {Released}</p>
                    <p>Rating: {imdbRating}/10</p>
                </div>
                <Ratings rating={imdbRating} />
            </div>
        </div>
    );
};

export default CurrentMovie;
