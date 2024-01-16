import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router';
import { Actors, MovieInfo, Movies, NavBar, Profile } from './index';
import './App.css';
function App() {
  return (
    <div className="root">
      <CssBaseline />
      <NavBar />
      <main className="content">
        <div className="toolbar" />
        <Routes>
          <Route path="/movie/:id" element={<MovieInfo />}></Route>
          <Route path="/actors/:id" element={<Actors />}></Route>
          <Route path="/" element={<Movies />}></Route>
          <Route path="/profile/:id" element={<Profile />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
