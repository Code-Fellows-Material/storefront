import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductFilter } from './ProductFilter';
import Typography from '@mui/material/Typography'
import { getProducts } from '../../store/products';

function Products() {

  let dispatch = useDispatch();
  let productsState = useSelector(state => state.products.products);
  let categoryState = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(getProducts);
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  

  return (
    <>
      <Typography variant="h4" color="initial" data-testid="Products">Products</Typography>
      <ProductFilter
        products={productsState}
        activeCat={categoryState.activeCategory}
        showActiveCat={categoryState.showActiveCategory}
      />
    </>
  );
}

export default Products;
