import { useState } from 'react'
import Listmovie from './Components/Listmovie/Listmovie'
import Searchbar from './Components/Searchbar/Searchbar'

export default function Home({movies,setMovies}) {
    const [searchTerm, setSearchTerm] = useState('');
    const [rating, setRating] = useState(null);
    return (
        <div>
            <Searchbar movies={movies} setMovies={setMovies} searchTerm={searchTerm} setSearchTerm={setSearchTerm} rating={rating} setRating={setRating} />
            <Listmovie movies={movies} setMovies={setMovies} searchTerm={searchTerm} setSearchTerm={setSearchTerm} rating={rating} setRating={setRating} />
        </div>
    )
}