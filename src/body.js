import React, { Component } from 'react'
import GETDATA from './header'

 




export default class body extends Component {
    
    
    render() {
        return (
            <div>
            <h1 className = "divider">Current Search</h1>
            <button onClick={GETDATA}>Click Me</button>  
            <div class="currentMovie"><img src="" alt=""></img>
            
            <p>Current Movie Current Movie Current Movie Current Movie Current Movie Current Movie Current Movie Current Movie Current Movie Current Movie Current Movie Current Movie</p>
            <div class="ratings-container">
            <div class="ratings-text">
            <p>Released Date: 08 Dec 2017</p>
            <p>Rating: 7.4/10</p>
            </div>
            <div><img class="thumb-icon" src="./source/ThumbsUp.jpg" alt="thumbs up icon"></img>
            </div>
            </div>
            </div>
            </div>  
            
        )
    }
}
