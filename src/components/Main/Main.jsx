import { Stack } from '@mui/material';
import React from 'react';
import Categories from '../Categories/Categories';
import Footer from '../Footer/Footer';
import Nav from '../Header/Nav/Nav';
import Products from '../Products/Products';

export default function Main() {
  return (
    <>
      <Nav />
      <Stack sx={{textAlign: 'center', p: 5}}>
        <Categories />
        <Products />
      </Stack>
      <Footer />
    </>
  );
}
