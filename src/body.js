
//import GETDATA from "./header";
import React from 'react';
import Rating from './rating.js';
//import '../styles/currentMovie.css'

// export default class body extends Component {
//   render() {
//     return (
//       <div>
//         <h1 className="divider">Current Search</h1>
//         <button onClick={GETDATA}>Click Me</button>
//         <div class="currentMovie">
//           <img src="" alt=""></img>

//           <p>
//             Current Movie Current Movie Current Movie Current Movie Current
//             Movie Current Movie Current Movie Current Movie Current Movie
//             Current Movie Current Movie Current Movie
//           </p>
//           <div class="ratings-container">
//             <div class="ratings-text">
//               <p>Released Date: 08 Dec 2017</p>
//               <p>Rating: 7.4/10</p>
//             </div>
//             <div>
//               <img
//                 class="thumb-icon"
//                 src="./source/ThumbsUp.jpg"
//                 alt="thumbs up icon"
//               ></img>
//             </div>
//           </div>
//         </div>


const currentMovie = ({ Poster, Title, Plot, Released, imdbRating }) => {
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
                <Rating rating={imdbRating} />
            </div>
        </div>
    );
};

export default currentMovie;
//       </div>
//     );
//   }
// }
