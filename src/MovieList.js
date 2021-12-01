import ListMovies from "./ListMovies";

function MovieList({ movies, favourites, setFavourites }) {
  const addToFavourites = (event) => {
    console.log("addToFavourites");
    const id = parseInt(event.target.id);
    const foundMovie = movies.find((movie) => movie.id === id);
    setFavourites([...favourites, foundMovie]);
  };
  return (
    <div>
      <h1>Movies</h1>
      {movies.map((movie) => {
        return (
          <ListMovies
            movies={movies}
            key={movie.id + 1}
            id={movie.id}
            name={movie.name}
            releasedOn={movie.releasedOn}
            watched={movie.watched}
            handleAddToFav={addToFavourites}
          />
        );
      })}
    </div>
  );
}
export default MovieList;
