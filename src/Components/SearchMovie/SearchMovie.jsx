import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Listmovie from '../Listmovie/Listmovie';
import Rating from '@mui/material/Rating';
import "./SearchMovie.css"

export default function SearchMovie({ movies, setMovies, searchTerm, setSearchTerm ,rating,setRating}) {
    return (
        <div className='search'>
            <TextField id="outlined-basic" label="Search Movie" variant="outlined" onChange={(event) => {
                setSearchTerm(event.target.value)
            }
            } />
            <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                    setRating(newValue);
                    console.log(rating)
                }}
            />
        </div>
    )
}
