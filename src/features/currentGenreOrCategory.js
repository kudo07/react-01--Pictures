import { createSlice } from '@reduxjs/toolkit';

export const genreOrCategory = createSlice({
  name: 'genreOrCategory',
  initialState: {
    genreIdOrCategoryName: '',
    page: 1,
    searchQuery: '',
  },
  reducers: {
    // get the id from the dispatch(selectGenreOrCategory(value) from Sidebar.jsx pass it to the store.js
    selectGenreOrCategory: (state, action) => {
      // console.log(action.payload);
      state.genreIdOrCategoryName = action.payload;
    },
    searchMovie: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});
export const { selectGenreOrCategory, searchMovie } = genreOrCategory.actions;
export default genreOrCategory.reducer;
