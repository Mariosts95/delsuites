import { useState } from 'react';

// @Material UI
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Link from '@mui/material/Link';

// import assets
import logo from '/images/delsuites-logo.svg';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 'auto',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: 'auto',
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
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='open drawer'
          onClick={() => {
            setMenuActive((prev) => !prev);
          }}
          sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Link
          href='/'
          className='logo'
          underline='none'
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            mr: { xs: 'unset', md: 'auto' },
            ml: { xs: 'auto', md: 'unset' },
          }}
        >
          <img
            style={{ maxWidth: '3rem', width: '100%', mr: '1rem' }}
            src={logo}
            alt='logo'
          />
          <Typography
            variant='h6'
            sx={{
              fontFamily: 'Montserrat Light Alt1',
              textTransform: 'uppercase',
            }}
          >
            delsuites
          </Typography>
        </Link>
        <Search sx={{ display: { xs: 'none', md: 'block' } }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder='Search…'
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </Toolbar>
      <Drawer
        open={menuActive}
        onClose={() => {
          setMenuActive(false);
        }}
      >
        <Box sx={{ p: 3 }}>
          <Search sx={{ display: { xs: 'block', md: 'none' } }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search…'
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <ul>
            <li>
              <Typography>Menu Item</Typography>
            </li>
            <li>
              <Typography>Menu Item</Typography>
            </li>
            <li>
              <Typography>Menu Item</Typography>
            </li>
            <li>
              <Typography>Menu Item</Typography>
            </li>
            <li>
              <Typography>Menu Item</Typography>
            </li>
          </ul>
        </Box>
      </Drawer>
    </AppBar>
  );
};
export default Header;
