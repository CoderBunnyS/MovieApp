// const Search = ({ fetchCall }) => {
//     const [searchedValue, setSearchedValue] = useState('')
//     const [selectedTypeValue, setSelectedTypeValue] = useState('')


//     const handleInput = (e) => {
//         e.preventDefault()
//         setSearchedValue(e.target.value)
//     }

//     const handleClick = (e) => {
//         e.preventDefault()
//         fetchCall(searchedValue, selectedTypeValue)
//     }

//     const handleSelectChange = (e) => {
//         e.preventDefault()
//         setSelectedTypeValue(e.target.value)
//     }

//     return (
//         <div className='container-header'>
//             <h1 className='what-title'>What to watch</h1>
//             <div>
//                 <input onChange={handleInput} type='text' placeholder='Title' />
//                 <select id="selection" name="selection" placeholder='Type' onChange={handleSelectChange}>
//                     <option value="" hidden>Type</option>
//                     <option value="movie">Movies</option>
//                     <option value="series">Series</option>
//                     <option value="episode">Episode</option>
//                 </select>
//                 <button onClick={handleClick}>Search</button>
//             </div>
//         </div>
//     );
// };

// export default Search

import React, { useState } from 'react'
//import '../styles/Search.css'

const SearchBar = ({ fetchCall }) => {
    const [searchedValue, setSearchedValue] = useState('')
    const [selectedTypeValue, setSelectedTypeValue] = useState('')


    const handleInput = (e) => {
        e.preventDefault()
        setSearchedValue(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()
        fetchCall(searchedValue, selectedTypeValue)
    }

    const handleSelectChange = (e) => {
        e.preventDefault()
        setSelectedTypeValue(e.target.value)
    }

    return (
        <div className='container-header'>
            <h1 className='what-title'>What to watch</h1>
            <div>
                <input onChange={handleInput} type='text' placeholder='Title' />
                <select id="selection" name="selection" placeholder='Type' onChange={handleSelectChange}>
                    <option value="" hidden>Type</option>
                    <option value="movie">Movies</option>
                    <option value="series">Series</option>
                    <option value="episode">Episode</option>
                </select>
                <button onClick={handleClick}>Search</button>
            </div>
        </div>
    );
};

export default SearchBar