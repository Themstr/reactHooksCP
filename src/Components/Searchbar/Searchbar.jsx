import React from 'react'
import Addmovie from '../Addmovie/Addmovie'
import './Searchbar.css'
import SearchMovie from '../SearchMovie/SearchMovie';

export default function Searchbar({ movies, setMovies, searchTerm, setSearchTerm ,rating,setRating}) {
    return (
        <div className='bar'>
            <SearchMovie movies={movies} setMovies={setMovies} searchTerm={searchTerm} setSearchTerm={setSearchTerm} rating={rating} setRating={setRating} />
            <Addmovie movies={movies} setMovies={setMovies} />
        </div>
    )
}
