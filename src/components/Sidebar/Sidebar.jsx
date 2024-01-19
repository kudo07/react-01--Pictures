import React from 'react';
import dark from './dark.png';
import { Link } from 'react-router-dom';
import './Sidebar.css';

import {
  Box,
  CircularProgress,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material';
import { useGetGenresQuery } from '../../service/TMDB';
import genreIcons from '../../assets/genres';
import { useDispatch, useSelector } from 'react-redux';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];
const Sidebar = ({ setMobileOpen, isDarkMode }) => {
  const { genreIdOrCategoryName } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  // const imageClass = `img ${isDarkMode ? 'dark-mode' : ''}`;
  const { data, isFetching } = useGetGenresQuery();
  const dispatch = useDispatch();
  // send specific data from component to redux
  // console.log(data);
  return (
    <>
      <Link to="/" className="imageLink">
        <img src={dark} className="logo" alt="Filmpire Logo" />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className="links" to="/">
            <ListItem onClick={() => dispatch(selectGenreOrCategory(value))}>
              {/* travel function  entire app from sidebar to over store .js  */}
              <ListItemIcon>
                <img
                  src={genreIcons[label.toLowerCase()]}
                  className="genreImages"
                  height={30}
                  alt="logo"
                />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genre </ListSubheader>
        {isFetching ? (
          // show some kind of loader
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : (
          data.genres.map(({ name, id }) => (
            <Link key={name} className="links" to="/">
              <ListItem onClick={() => dispatch(selectGenreOrCategory(id))}>
                <ListItemIcon>
                  <img
                    src={genreIcons[name.toLowerCase()]}
                    className="genreImages"
                    height={30}
                    alt="logo"
                  />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))
        )}
      </List>
    </>
  );
};

export default Sidebar;
