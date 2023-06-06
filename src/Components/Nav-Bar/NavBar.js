import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ThemeButton from './../Buttons/ThemeButton';
import { Helmet } from 'react-helmet';
import './style.css';
import SearchButton from '../Buttons/SearchButton';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '18ch',
      '&:focus': {
        width: '25ch',
      },
    },
  },
}));

export default function NavBar() {

  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'light');
  const [urlText, setUrlText] = React.useState('https://www.weatherapi.com/weather/widget.ashx?q=sri lanka&wid=3&tu=1&div=weatherapi-weather-widget-3');
  const [location, setLocation] = React.useState(localStorage.getItem('location') || 'Sri Lanka');
  const [barColor, setBarColor] = React.useState("#1976d2");

  const barTheme = {
    backgroundColor: barColor
  }

  React.useEffect(() => {
    localStorage.setItem('loaction', location);
    document.body.className = location;

    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme, location]);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      setBarColor('#333333');
    } else {
      setTheme('light');
      setBarColor('#1976d2');
    }
  };

  const printData = (e) => {
    // 👇 Store the input value to local state
    if (e.target.value === "") {
      setLocation("Sri Lanka");
    } else {
      setLocation(e.target.value);
    }
  };

  const setLocationUrl = (e) => {
    setUrlText("https://www.weatherapi.com/weather/widget.ashx?q=" + location + "&wid=3&tu=1&div=weatherapi-weather-widget-3");
  }

  return (
    <div>
      <Box className={`App ${theme}`} sx={{ flexGrow: 1 }}>
        <AppBar style={barTheme} position="static">
          <Toolbar>

            <IconButton
              onClick={toggleTheme}
              style={{ height: "5px", width: "5px" }}
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ml:3, mr:5}}
            >
              <ThemeButton />
            </IconButton>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 0.01, display: { xs: 'none', sm: 'block' } }}
            >
              iWeather
            </Typography>

            <Search sx={{ flexGrow: 0.2 }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={printData}
              />
            </Search>

            <IconButton
              onClick={setLocationUrl}
              style={{ height: "25px", borderRadius: "30px" }}
            >
              <SearchButton />
            </IconButton>

          </Toolbar>
        </AppBar>
      </Box>

      <Helmet>
        <script type='text/javascript' src={urlText} async></script>
      </Helmet>
    </div>
  );
}