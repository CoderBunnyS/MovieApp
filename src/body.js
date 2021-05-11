import React, { Component } from 'react'
//import Header from './header'
 

function getData() {
    fetch("http://www.omdbapi.com/?s=lost&type=movie&apikey=20fc5714")
        .then(res => {
            return res.json()
        })
        .then(data =>  console.log(data[0].search[0].title))
        
        //.then(data => mainContainer.innerText = data.activity)
        .catch(error => console.log("error"))
    }
     



export default class body extends Component {
    
    
    render() {
        return (
            <div>
            <h1 className = "divider">Current Movie</h1> 
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
