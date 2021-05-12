// import React, { Component } from "react";

// export default class History extends Component {
//   render() {
//     return (
//       <div>
//         <h1 className="divider">Previous Search</h1>

//         <div class="movie-gallery-container">
//           <div class="movie">
//             <img src="" alt=""></img>
//             <h1>The Disaster Artist</h1>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris
//               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
//               reprehenderit in voluptate velit esse cillum dolore eu fugiat
//               nulla pariatur. Excepteur sint occaecat cupidatat non proident,
//               sunt in culpa qui officia deserunt mollit anim id est laborum.
//             </p>
//             <div class="ratings-container">
//               <div class="ratings-text">
//                 <p>Released Date: 08 Dec 2017</p>
//                 <p>Rating: 7.4/10</p>
//               </div>
//               <div>
//                 <img class="thumb-icon" src="" alt="thumb icon"></img>
//               </div>
//             </div>
//           </div>

//           <div class="movie">
//             <img src="" alt=""></img>
//             <h1>The Disaster Artist</h1>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris
//               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
//               reprehenderit in voluptate velit esse cillum dolore eu fugiat
//               nulla pariatur. Excepteur sint occaecat cupidatat non proident,
//               sunt in culpa qui officia deserunt mollit anim id est laborum.
//             </p>
//             <div class="ratings-container">
//               <div class="ratings-text">
//                 <p>Released Date: 08 Dec 2017</p>
//                 <p>Rating: 7.4/10</p>
//               </div>
//               <div>
//                 <img class="thumb-icon" src="" alt="thumb icon"></img>
//               </div>
//             </div>
//           </div>

//           <div class="movie">
//             <img src="" alt=""></img>
//             <h1>The Disaster Artist</h1>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris
//               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
//               reprehenderit in voluptate velit esse cillum dolore eu fugiat
//               nulla pariatur. Excepteur sint occaecat cupidatat non proident,
//               sunt in culpa qui officia deserunt mollit anim id est laborum.
//             </p>
//             <div class="ratings-container">
//               <div class="ratings-text">
//                 <p>Released Date: 08 Dec 2017</p>
//                 <p>Rating: 7.4/10</p>
//               </div>
//               <div>
//                 <img class="thumb-icon" src="" alt="thumb icon"></img>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }


import React, { useEffect, useState } from 'react';
import Body from './Body'
//import '../styles/SearchHistory.css'

const SearchHistory = ({ movieData, title, recentGallery }) => {
    const [previousMovies, setPreviousMovies] = useState([])
    const [currentMovie, setCurrentMovie] = useState([])

    useEffect(() => {
        setCurrentMovie(movieData)
        setPreviousMovies(previousMovies.concat(movieData))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [movieData]);

    const listOfMovies = previousMovies.map((movie, i) => {
        return <Body {...movie} key={i} />
    })

    const singleMovies = <Body {...currentMovie} />


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

export default SearchHistory;