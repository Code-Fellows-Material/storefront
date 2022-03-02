import React from 'react';
import { connect } from 'react-redux';
import { ProductFilter } from './ProductFilter';

function Products(props) {
  return (
    <>
      <div data-testid="Products">Products</div>
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
