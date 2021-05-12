import React from 'react'
//import '../styles/Thumb.css'
import ThumbsUp from './Images/ThumbsDown.png'
import ThumbsDown from './Images/ThumbsUp.png'

const Rating = ({ rating }) => {
    const thumbsUpIcon = <img className='thumb-icon' src={ThumbsUp} alt='thumbs up icon' />

    const thumbsDownIcon = <img className='thumb-icon' src={ThumbsDown} alt='thumbs down icon' />

    const ratingCheck = rating > 5 ? thumbsUpIcon : thumbsDownIcon
    return (
        <div>
            {ratingCheck}
        </div>
    );
};

export default Rating;