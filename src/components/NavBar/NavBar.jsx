import React, { useEffect, useState } from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Button,
  Avatar,
} from '@mui/material';
import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
  ViewSidebar,
} from '@mui/icons-material';
import { Sidebar } from '../index';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Search from '../Search/Search';
import { createSessionId, fetchToken, moviesApi } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
// import { setUser, userSelector } from '../../features/auth';
import { setUser } from '../../features/auth';

const NavBar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  // const { isAuthenticated, user } = useSelector(userSelector);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dispatch = useDispatch();

  const token = localStorage.getItem('request_token');
  const sessionIdFromLocalStorage = localStorage.getItem('session_id');
  console.log(user);
  useEffect(() => {
    const logInUser = async () => {
      if (token) {
        if (sessionIdFromLocalStorage) {
          const { data: userData } = await moviesApi.get(
            `/account?session_id=${sessionIdFromLocalStorage}`
          );
          dispatch(setUser(userData));
        } else {
          const sessionId = await createSessionId();
          const { data: userData } = await moviesApi.get(
            `/account?session_id=${sessionId}`
          );
          dispatch(setUser(userData));
        }
      }
    };

    logInUser();
  }, [token]);

  // dark theme toggle
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  // mobile view of sidebar
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 600);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className="toolbar">
          {isMobileView && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              className="menuButton"
            >
              <Menu />
            </IconButton>
          )}
          <IconButton color="inherit" edge="start" onClick={toggleTheme}>
            {isDarkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobileView && <Search />}
          {/* login or not */}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={fetchToken}>
                LogIn &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to={`/profile/${user.id}`}
                className="linkButton"
                onClick={() => {}}
              >
                {!isMobileView && <>My Movies &nbsp;</>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="Profile"
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                />
              </Button>
            )}
          </div>
          {isMobileView && <Search />}
        </Toolbar>
      </AppBar>
      <div>
        <nav className="drawer">
          {isMobileView ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              className="drawerPaper"
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} isDarkMode={isDarkMode} />
            </Drawer>
          ) : (
            <Drawer className="drawerPaper" variant="permanent">
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
};

export default NavBar;
