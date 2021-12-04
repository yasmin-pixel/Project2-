import axios from "axios";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import FavList from "./FavList";
import MovieList from "./MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const getMovies = async () => {
    const response = await axios.get("https://hub.dummyapis.com/vj/wzGUkpZ");

    setMovies(response.data);
  };

  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);

  return (
    <div className="backgroundcolor">
      <BrowserRouter>
        <Header />
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
              <FavList favourites={favourites} setFavourites={setFavourites} />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
