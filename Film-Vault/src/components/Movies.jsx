import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from "axios";
import Pagination from './Pagination';

function Movies(props) {

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  function pageIncrease() {
    setPage(page + 1);
  }
  function pageDecrease() {
    page > 1 && setPage(page - 1)
  }

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=84e6e12742f350a7110b66c4669ec1aa&language=en-us&page=${page}`).then(function (res) {
    setMovies(res.data.results);
    }, [page,movies])
  })
  return (
    <div className='p-5'>
      <div className='text-2xl font-bold text-center m-5'>
        <h1>Trending Movies</h1>
      </div>

      <div className='flex flex-row flex-wrap justify-around gap-8'>

        {movies.map((movieObj) => {
          return <MovieCard key={movieObj.id} movieObj={movieObj} watchlist={props.watchlist} handleAddToWatchlist={props.handleAddToWatchlist} handleDeleteFromWatchlist={props.handleDeleteFromWatchlist} poster_path={movieObj.poster_path} movie_title={movieObj.title} />
        })}


      </div>
      <Pagination pageNo={page} pageUp={pageIncrease} pageDown={pageDecrease} />
    </div>
  )
}

export default Movies;



// https://api.themoviedb.org/3/movie/popular?api_key=84e6e12742f350a7110b66c4669ec1aa&language=en-us&page=2