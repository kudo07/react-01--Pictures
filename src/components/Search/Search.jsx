import { InputAdornment, TextField } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import React from 'react';
import { useState } from 'react';
import './Search.css';
import { useDispatch } from 'react-redux';
import { searchMovie } from '../../features/currentGenreOrCategory';
const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      dispatch(searchMovie(query));
    }
  };
  return (
    <div className="searchContainer">
      <TextField
        onKeyPress={handleKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        InputProps={{
          className: 'input',
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default Search;
