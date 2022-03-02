import React from 'react';
import { connect } from 'react-redux';

import { changeCategory, activateCategory } from '../../store/store';
import Button from '@mui/material/Button';

function Catagories(props) {
  return (
    <>
      <div data-testId={'Categories'}>Catagories</div>
      <Button data-testId={'catButton'} onClick={() => props.activateCategory()}>
        {props.showActiveCategory ? 'Show All' : 'Show Category'}
      </Button>
      <div>
        Category: {props.activeCategoryProp ? props.activeCategoryProp : 'none'}
      </div>
      <div>
        {props.categoryProp.map((cat) => (
          <Button onClick={() => props.changeCategory(cat)}>{cat}</Button>
        ))}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    categoryProp: state.state.categories,
    activeCategoryProp: state.state.activeCategory,
    showActiveCategory: state.state.showActiveCategory,
  };
};

const mapDispatchToProps = {
  changeCategory,
  activateCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Catagories);
