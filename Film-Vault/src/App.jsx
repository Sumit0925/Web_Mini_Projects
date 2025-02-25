import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import React, { useEffect, useState } from "react";

function App() {

  let [watchlist, setWatchlist] = useState([]);

  let handleAddToWatchlist = (movieObj) => {
    let newWatchlist = [...watchlist, movieObj];
    localStorage.setItem('moviesApp', JSON.stringify(newWatchlist));
    setWatchlist(newWatchlist)
    // console.log(newWatchlist)
  }

  let handleDeleteFromWatchlist = (movieObj) => {
    let filteredWatchlist = watchlist.filter((movie) => {
      return movie.id !== movieObj.id;
    })
    localStorage.setItem('moviesApp', JSON.stringify(filteredWatchlist));
    setWatchlist(filteredWatchlist);
    // console.log(filteredWatchlist)

  }

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem('moviesApp');
    if (!moviesFromLocalStorage) {
      return;
    }
    setWatchlist(JSON.parse(moviesFromLocalStorage));
  }, [])


  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <Movies watchlist={watchlist} handleAddToWatchlist={handleAddToWatchlist} handleDeleteFromWatchlist={handleDeleteFromWatchlist} />
            </>
          } />
          <Route path="/watchlist" element={
            <WatchList
              watchlist={watchlist}
              handleDeleteFromWatchlist={handleDeleteFromWatchlist}
              setWatchlist={setWatchlist}
            />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
