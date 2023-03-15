export const SET_FAVORITE='ADD_MOVIE_TO_FAVORITES'
export const REMOVE_FROM_FAVORITE='REMOVE_MOVIE_FROM_FAVORITES'

export const addMovieToFavorites = (movie) => ({
  type: 'ADD_MOVIE_TO_FAVORITES',
  payload: {
    movie,
  },
});

export const removeMovieFromFavorites = (movieId) => ({
  type: 'REMOVE_MOVIE_FROM_FAVORITES',
  payload: {
    movieId,
  },
});
