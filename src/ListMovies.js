import React, { useState } from "react";
function ListMovies({
  name,
  id,
  releasedOn,
  watched,
  handleAddToFav,
  isFavourite,
  handleFavouritesClick,
  handleEditChange,
  movies,
}) {
  const [isWatched, setWatched] = useState(watched);
  const watchMovie = () => {
    setWatched(true);
  };
  const [editName, setEditName] = useState(name);

  const handleChange = (e) => {
    let editName = e.target.value;
    setEditName(editName);
  };
  const handleClick = (event) => {
    // find the object inside the movie array using the id imported
    const arrayMovie = event.target.name;
    const foundMovie = movies.find((movie) => movie.arrayMovie === arrayMovie);
    setEditName([...editName, foundMovie]);
    // const getName = movies;
    console.log(arrayMovie);
    // using the object update the name using editName
    // save object to movie array using
  };

  return (
    <div>
      <li>{name}</li>
      <li>{id}</li>
      <li>{releasedOn}</li>
      <li>{watched}</li>

      {!isFavourite && (
        <button id={id} className="btn btn-dark" onClick={handleAddToFav}>
          Add to favorite
        </button>
      )}
      {isFavourite && (
        <button
          id={id}
          className="btn btn-dark"
          onClick={handleFavouritesClick}
        >
          Remove From Favourites
        </button>
      )}
      {isFavourite && (
        <button
          id={id}
          style={isWatched ? { color: "green" } : { color: "red" }}
          onClick={watchMovie}
        >
          {isWatched ? "Watched" : "watch"}
        </button>
      )}

      <input
        value={editName}
        type="text"
        placeholder="Edit your movie here"
        onChange={handleChange}
      ></input>

      <button
        name={name}
        type="text"
        className="edit btn-dark"
        onClick={handleClick}
      >
        Edit Movie
      </button>
    </div>
  );
}

export default ListMovies;
