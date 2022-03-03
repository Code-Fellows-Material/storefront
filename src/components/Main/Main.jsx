
import React from 'react';
import Categories from '../Categories/Categories';
import Footer from '../Footer/Footer';
import Nav from '../Header/Nav/Nav';
import Products from '../Products/Products';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function Main() {
  return (
    <Box sx={{ flexGrow: 1, m: 0, p:0 }}>
      <Nav />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Categories />
        </Grid>
        <Grid item xs={12}>
          <Products />
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
}
