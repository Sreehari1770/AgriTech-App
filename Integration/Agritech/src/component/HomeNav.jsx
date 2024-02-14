import * as React from 'react';
import { Link } from 'react-router-dom';  
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import SideBar from './Sidebar';
// import logo from '../assets/images/field1.jpg'
const pages = ['login'];  

function HomeNav() {
  

  return (
    <AppBar position="static">
      <Container maxWidth="xl" className='bg-color'>
        <Toolbar disableGutters>
        {/* <logo sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <SideBar/>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            AgriTech
          </Typography>
          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={`/${page.toLowerCase()}`}
                sx={{ mx: 1, color: 'inherit', textTransform: 'capitalize' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default HomeNav;
