import ListMovies from "./ListMovies";

const FavList = ({ movies, favourites, setFavourites }) => {
  const removeAll = () => {
    setFavourites([]);
  };

  const removeMovie = (event) => {
    const id = parseInt(event.target.id);
    const newFavouriteList = favourites.filter(
      (favourites) => favourites.id !== id
    );

    setFavourites([...newFavouriteList]);
  };

  return (
    <div>
      <h2>Favourites</h2>

      {favourites.length > 0 &&
        favourites.map((movie) => {
          return (
            <ListMovies
              movies={movies}
              key={movie.id + 1}
              id={movie.id}
              name={movie.name}
              releasedOn={movie.releasedOn}
              watched={movie.watched}
              isFavourite={true}
              handleFavouritesClick={removeMovie}
              handleAddToFav={() => console.log("we are here")}
            />
          );
        })}

      <button
        className="btn btn-dark"
        style={{ marginLeft: "35rem" }}
        onClick={removeAll}
      >
        Remove all
      </button>
    </div>
  );
};

export default FavList;
