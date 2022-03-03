import React from 'react';
import { connect } from 'react-redux';
import { ProductFilter } from './ProductFilter';
import Typography from '@mui/material/Typography'

function Products(props) {
  return (
    <>
      <Typography variant="h4" color="initial" data-testid="Products">Products</Typography>
      <ProductFilter
        products={props.productsProp}
        activeCat={props.activeCategoryProp}
        showActiveCat={props.showActiveCategory}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    productsProp: state.products.products,
    activeCategoryProp: state.categories.activeCategory,
    showActiveCategory: state.categories.showActiveCategory,
  };
};

export default connect(mapStateToProps)(Products);
