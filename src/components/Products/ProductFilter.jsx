import React from 'react';
import Typography from '@mui/material/Typography'
import Product from './Product';



export function ProductFilter({ products, activeCat, showActiveCat }) {
  let productsArr = showActiveCat ?
    products
      .filter((product) => activeCat === product.category)
      .map((product) => <Product key={product.id} product={product}/>)
    :
    products.map((product) => <Product key={product.id} product={product}/>);

  return <Typography variant="h6" color="initial">{productsArr}</Typography>;
}