import { useState } from 'react';

// @Material UI
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import SearchInput from '../UI/SearchInput';

// import assets
import logo from '/images/delsuites-logo.svg';

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
        <SearchInput sx={{ display: { xs: 'none', md: 'block' } }} />
      </Toolbar>
      <Drawer
        open={menuActive}
        onClose={() => {
          setMenuActive(false);
        }}
      >
        <Box sx={{ p: 3 }}>
          <SearchInput sx={{ display: { xs: 'block', md: 'none' } }} />
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
