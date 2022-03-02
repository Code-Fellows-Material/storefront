import React from 'react';
import { connect } from 'react-redux';

import { changeCategory, activateCategory } from '../../store/store';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

function Catagories(props) {
  return (
    <>

    <Typography data-testid='Categories' variant="h3" color="initial">Catagories</Typography>
      <Button sx={{width: '30%', alignSelf: 'center'}} variant="outlined" data-testid='catButton' onClick={() => props.activateCategory()}>
        {props.showActiveCategory ? 'Show All' : 'Show Category'}
      </Button>

      <Typography variant="h4" color="initial">
        Category: {props.activeCategoryProp ? props.activeCategoryProp : 'none'}
      </Typography>
      <div>
        {props.categoryProp.map((cat) => (
          <Button variant="outlined" onClick={() => props.changeCategory(cat)}>{cat}</Button>
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
