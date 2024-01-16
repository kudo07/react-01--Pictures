import { configureStore } from '@reduxjs/toolkit';
import { tmdbApi } from '../service/TMDB';
import genreOrCategoryReducer from '../features/currentGenreOrCategory';
import userReducer from '../features/auth';
const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: genreOrCategoryReducer,

    user: userReducer,
    // make the immutable state and pass it to the Movies.jsx
    // const { genreIdOrCategoryName } = useSelector(
    //   (state) => state.currentGenreOrCategory
    // );
    // const { data, error, isFetching } = useGetMoviesQuery({
    //   genreIdOrCategoryName,
    //   page,
    // });
    //
    // which got the id
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});

export default store;
