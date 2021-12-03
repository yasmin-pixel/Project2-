import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
  setMovies,
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
    // find the object inside the movie array
    const arrayMovie = event.target.name;
    const foundMovie = movies.find((movie) => movie.arrayMovie === arrayMovie);
    setEditName(...editName, foundMovie);

    console.log(arrayMovie);
    // using the object update the name using editName
    // save object to movie array using
  };

  return (
    <div>
      <div
        className="card"
        style={{
          margin: "150px",
          marginLeft: "400px",
          backgroundColor: "#cddafd",
          padding: "10px 20px",
          width: "18rem",
        }}
      >
        <div className="card-body">
          <h5 className="card-title">TatyTV</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul
          className="list-group list-group-flush"
          style={{ backgroundColor: "#90e0ef" }}
        >
          <li
            className="list-group-item"
            style={{ backgroundColor: "#ade8f4" }}
          >
            {name}
          </li>
          <li
            className="list-group-item"
            style={{ backgroundColor: "#caf0f8" }}
          >
            {id}
          </li>
          <li
            className="list-group-item"
            style={{ backgroundColor: "#ade8f4" }}
          >
            {releasedOn}
          </li>
        </ul>
      </div>

      {!isFavourite && (
        <button
          id={id}
          className="btn btn-dark"
          style={{ marginLeft: "10rem" }}
          onClick={handleAddToFav}
        >
          Add to favorite
        </button>
      )}
      {isFavourite && (
        <button
          id={id}
          className="btn btn-dark"
          style={{ marginLeft: "10rem" }}
          onClick={handleFavouritesClick}
        >
          Remove From Favourites
        </button>
      )}
      {isFavourite && (
        <button
          id={id}
          style={
            isWatched
              ? { color: "green" }
              : { color: "red", padding: "10px", marginLeft: "10rem" }
          }
          onClick={watchMovie}
        >
          {isWatched ? "Watched" : "watch"}
        </button>
      )}

      <input
        value={editName}
        type="text"
        style={{ padding: "10px", marginLeft: "10rem" }}
        placeholder="Edit your movie here"
        onChange={handleChange}
      ></input>

      <button
        style={{ padding: "10px", marginLeft: "10rem" }}
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
