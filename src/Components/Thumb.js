import React from 'react'
import '../Assets/Thumb.css'
import ThumbsUp from '../Images/ThumbsUp.png'
import ThumbsDown from '../Images/ThumbsDown.png'

const Thumb = ({ rating }) => {
    const thumbsUpIcon = <img className='thumb-icon' src={ThumbsUp} alt='thumbs up icon' />

    const thumbsDownIcon = <img className='thumb-icon' src={ThumbsDown} alt='thumbs down icon' />

    const ratingCheck = rating > 5 ? thumbsUpIcon : thumbsDownIcon
    return (
        <div>
            {ratingCheck}
        </div>
    );
};

export default Thumb;