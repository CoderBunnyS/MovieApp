import React from 'react'
import '../Assets/Ratings.css'
import ThumbsUp from '../Images/ThumbsUp.png'
import ThumbsDown from '../Images/ThumbsDown.png'

const Ratings = ({ rating }) => {
    const thumbsDownIcon = <img className='thumb-icons' src={ThumbsDown} alt='thumbs down icon' />
    const thumbsUpIcon = <img className='thumb-icons' src={ThumbsUp} alt='thumbs up icon' />
    const movieRating = rating >= 5 ? thumbsUpIcon : thumbsDownIcon
    return (
        <div>
            {movieRating}
        </div>
    );
};

export default Ratings;