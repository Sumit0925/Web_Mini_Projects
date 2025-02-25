import React, { useEffect, useState } from 'react';
import genreids from '../Utility/genre';

function WatchList(props) {

  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currGenre, SetCurrGenre] = useState("All Genres");

  function handleFilter(genre) {
    SetCurrGenre(genre);
  }

  function handleSearch(event) {
    let newValue = event.target.value;
    setSearch(newValue);
  }

  let sortIncreasingRating = () => {
    let sortedIncreasing = props.watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    })

    props.setWatchlist([...sortedIncreasing])
  }
  let sortDecreasingRating = () => {
    let sortedDecreasing = props.watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    })

    props.setWatchlist([...sortedDecreasing])
  }


  // let sortIncreasingPopularity = () => {
  //   let sortedIncreasing = props.watchlist.sort((movieA, movieB) => {
  //     return movieA.popularity - movieB.popularity;
  //   })

  //   props.setWatchlist([...sortedIncreasing])
  // }
  // let sortDecreasingRatingPopularity = () => {
  //   let sortedDecreasing = props.watchlist.sort((movieA, movieB) => {
  //     return movieB.popularity - movieA.popularity;
  //   })

  //   props.setWatchlist([...sortedDecreasing])
  // }

  useEffect(() => {
    let updatedGenreList = props.watchlist.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]]
    })
    updatedGenreList = new Set(updatedGenreList)
    setGenreList(["All Genres", ...updatedGenreList])
    console.log(updatedGenreList);
  }, [props.watchlist])


  return (
    <>
      <div className='flex justify-center flex-wrap m-4 gap-4'>
        {genreList.map((genre) => {
          return <h1 onClick={() => { handleFilter(genre) }} className={
            (currGenre === genre) ? 'flex justify-center items-center h-[3rem] w-[9rem] rounded-xl text-white text-bold  bg-blue-400 '
              : 'flex justify-center items-center h-[3rem] w-[9rem] rounded-xl text-white text-bold  bg-gray-400 '}>
            {genre}
          </h1>
        })}


        {/* <h1 className=>Action</h1> */}
      </div>


      <div className='flex justify-center my-4'>

        <input onChange={handleSearch} value={search} type="text" placeholder='Search Movies' className='h-[3rem] w-[18rem] bg-gray-200 outline-none px-4' />

      </div>

      <div className='rounded-lg overflow-hidden border border-gray-200 m-8'>
        <table className='w-full text-gray-500 text-center '>
          <thead className='border-b-2'>
            <tr>
              <th>Name</th>

              <th className='flex justify-center'>
                <div onClick={sortIncreasingRating} className='p-2 '><i class="fa-solid fa-arrow-up"></i></div>
                <h1 className='p-2 '>Rating</h1>
                <div onClick={sortDecreasingRating} className='p-2'><i class="fa-solid fa-arrow-down"></i></div>
              </th>
              <th className=''>
                {/* <div className='p-2 '><i class="fa-solid fa-arrow-up"></i></div> */}
                <h1 className='p-2'>Popularity</h1>
                {/* <div className='p-2'><i class="fa-solid fa-arrow-down"></i></div> */}
              </th>


              <th>Genre</th>
            </tr>

          </thead>
          <tbody>

            {props.watchlist.filter((movieObj=>{
              if(currGenre === "All Genres") {
                return true;
              }
              else{
                return genreids[movieObj.genre_ids[0]]===currGenre;
              }
            })).filter((movieObj) => {
              return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase())
            }).map((movieObj) => {
              return (<tr className='border-b-2'>
                <td className='flex items-center px-6 py-4'>
                  <img className='h-[6rem] w-[5rem]  ' src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`} alt="movie-img" />
                  <h1 className='mx-10'>{movieObj.title}</h1>
                </td>
                <td>{movieObj.vote_average}</td>
                <td>{movieObj.popularity}</td>
                <td>{genreids[movieObj.genre_ids[0]]}</td>
                <td className='text-red-800 '><button onClick={() => { props.handleDeleteFromWatchlist(movieObj) }}>Delete</button></td>
              </tr>);


            })}



          </tbody>
        </table>
      </div>


    </>

  )
}

export default WatchList;