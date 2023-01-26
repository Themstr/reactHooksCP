import MovieCard from './MovieCard';
import './init.css'
export default function Listmovie({ movies, setMovies ,searchTerm,setSearchTerm,rating,setRating}) {
    let x = movies;
    for (let char in searchTerm){
        x = x.filter(el => el.title.toUpperCase().includes(searchTerm[char].toUpperCase()))
    }
    if (rating!=null){
        x = x.filter(el => el.rating ==rating)
    }
    return (
        <div className='list'>
            {
                x.length == 0 ? <h1>Not Found</h1> : x.map( (el,key) => <MovieCard el={el} movies={movies} setMovies={setMovies} key={key}/>)
            }
        </div>
    );
}