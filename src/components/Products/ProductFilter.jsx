import React from 'react';

export function ProductFilter({ products, activeCat, showActiveCat }) {
  let productsArr = showActiveCat ?
    products
      .filter((product) => activeCat === product.category)
      .map((product) => product.name)
    :
    products.map((product) => product.name);

  return <div>{ productsArr }</div>;
}
