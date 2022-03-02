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
    productsProp: state.state.products,
    activeCategoryProp: state.state.activeCategory,
    showActiveCategory: state.state.showActiveCategory,
  };
};

export default connect(mapStateToProps)(Products);
