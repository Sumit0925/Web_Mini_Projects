import React, { useState } from 'react'
import WatchList from './WatchList';

function MovieCard(props) {

    const [isClicked, setIsClicked] = useState(false);

    // function toggleClick() {
    //     !isClicked ? setIsClicked(true) : setIsClicked(false)
    // }

    function isContained(movieObj) {
        for (let i = 0; i < props.watchlist.length; i++) {
            if (props.watchlist[i].id === movieObj.id) {
                return true;
            }

            

        }
        return false;

    }


    return (
        <div className='h-[40vh] w-[200px] bg-cover bg-center rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end overflow-hidden' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.poster_path})` }}>

            {
                isContained(props.movieObj) ? (
                    <h1 onClick={() => { props.handleDeleteFromWatchlist(props.movieObj) }} className='m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60'>
                        &#10060;
                    </h1>
                ) : (
                    <h1 onClick={() => { props.handleAddToWatchlist(props.movieObj) }} className='m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60'>
                        &#128525;
                    </h1>
                )

            }

            {/* {!isClicked && (<h1 onClick={() => {
                props.handleAddToWatchlist(props.movieObj)
                toggleClick();
            }} className='m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60'>
                &#128525;
            </h1>)}
            {isClicked && (<h1 onClick={() => { 
                props.handleDeleteFromWatchlist(props.movieObj) 
                toggleClick();
                }} className='m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60'>
                &#10060;
            </h1>)} */}

            <h1 className='text-white text-xl text-center w-full  bg-gray-900/60'>{props.movie_title}</h1>
        </div>
    )
}

export default MovieCard;