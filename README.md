# List technologies used

    > JavaScript
    > CSS
    >React
    >Bootstrap
    >Axios

    # Document your planning and tell a story about your development process and problem-solving strategy
    ##User stories

For this project, I started off with a wireFrame that outlined where the different components will go. I designed my web brower to be simple with buttons allocated to diffrent jobs.

# User Stories

• As a user I want to be able to add a new items from the movie list provided. So that I know it saved and I don’t have to search for the movie again.
• As a user I want to take a look at what I have saved in my favourite list.
• As a user I want to be able to Edit a name of a movie.
• As a user I want to be able to mark a movie as watched so that I know that I have watched that movie.
• As a user I want to remove an item form the favourite list.
• As a user I want to remove all watched movies form my list. So that I can remove all the movies at once.

    # Document your planning and tell a story about your development process and problem-solving strategy

I started to think about the diffrent types components that I needed and what I should call them.

> Header.js
> ListMovies.js
> MovieList.js
> FavList.js
> App.js
> Then using the URL provided I retrieved the data from the API.

I had to install axios in order to get the information I needed for my web brosw
<const [favourites, setFavourites] = useState([]);>
I created states which holds the information of the movies.
Then started to use these states and setStates to make diffrent functions.

First function was to add on a item.

<const addToFavourites = (event) => {
const id = parseInt(event.target.id);
const foundMovie = movies.find((movie) => movie.id === id);
setFavourites([...favourites, foundMovie]);
};>

Then used a condition for which bascally state when an onClick happens and the item is true add it on to the favourite list if nothing happens. I used a bang to swap the condition.
Then used a condition for which bascally state when an onClick happens and the item is true add it on to the favourite list if not nothing happens. I used a bang to swap the condition.

{!isFavourite && (
<button id={id} className="btn btn-dark" onClick={handleAddToFav}>
Add to favorite

          className="btn btn-dark"
          onClick={handleFavouritesClick}
        >

I followed the same format for the rest of the conponents.
I followed the similar format for the rest of the conponents and built my web browers up one component at a time.

what I struggled on:

Edit part of the project I found extermly hard and I struggled to get the component to work. I reserched alot and even tried to do simliar method as what I did for watch/watched but did not work.
