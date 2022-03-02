import React from 'react';
import Typography from '@mui/material/Typography'

export function ProductFilter({ products, activeCat, showActiveCat }) {
  let productsArr = showActiveCat ?
    products
      .filter((product) => activeCat === product.category)
      .map((product) => product.name)
    :
    products.map((product) => <div>{product.name}</div>);

  return <Typography variant="h5" color="initial">{ productsArr }</Typography>;
}
