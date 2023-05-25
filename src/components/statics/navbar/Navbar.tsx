import React from 'react';
import { AppBar, Toolbar, Typography, Box, } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <AppBar position="static" style={{ background: "#E11584" }}>
        <Toolbar variant="dense">
          <Box style={{ cursor: "pointer" }} >
            <Typography variant="h5" style={{ color: "white" }}>
              Blog Pessoal
            </Typography>
          </Box>

          <Box display="flex" justifyContent="start">
            <Link to='/home' className='text-decorator-none'>
              <Box mx={1} style={{ cursor: "pointer", color:'white' }}>
                <Typography variant="h6" color="inherit">
                  Home
                </Typography>
              </Box>
            </Link>
            <Box mx={1} style={{ cursor: "pointer" }}>
              <Typography variant="h6" color="inherit">
                Criar postagem
              </Typography>
            </Box>
            <Box mx={1} style={{ cursor: "pointer" }}>
              <Typography variant="h6" color="inherit">
                Postagens
              </Typography>
            </Box>
            <Box mx={1} style={{ cursor: "pointer" }}>
              <Typography variant="h6" color="inherit">
                Temas
              </Typography>
            </Box>
            <Box mx={1} style={{ cursor: "pointer" }}>
              <Typography variant="h6" color="inherit">
                Cadastrar tema
              </Typography>
            </Box>
            <Link to='/login' className='text-decorator-none'>
              <Box mx={1} style={{ cursor: "pointer", color:'white' }}>
                <Typography variant="h6" color="inherit">
                  Logout
                </Typography>
              </Box>
            </Link>
          </Box>

        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar;