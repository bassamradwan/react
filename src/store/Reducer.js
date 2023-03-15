import { REMOVE_FROM_FAVORITE, SET_FAVORITE } from "./action";

const initialState = {
  favorites: [],
  count:0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload.movie],
        count:state.count +1
      };
    case REMOVE_FROM_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((movie) => movie.id !== action.payload.movieId),
        count:state.count -1
      };
    default:
      return state;
  }
};

export default reducer;
