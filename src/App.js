import axios from "axios";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import ListMovies from "./ListMovies";
import FavList from "./FavList";
import MovieList from "./MovieList";

import { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const getMovies = async () => {
    const response = await axios.get("https://hub.dummyapis.com/vj/wzGUkpZ");
    // console.log(response.data);
    setMovies(response.data);
  };

  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);

  return (
    <BrowserRouter>
      <Header />
      <div class="container-fluid">
        <div className="App">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <MovieList
                  movies={movies}
                  favourites={favourites}
                  setMovies={setMovies}
                  setFavourites={setFavourites}
                />
              }
            ></Route>
            <Route
              path="/favourite"
              element={
                <FavList
                  favourites={favourites}
                  setFavourites={setFavourites}
                />
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
