import React from 'react';
import { connect } from 'react-redux';

import { changeCategory, activateCategory } from '../../store/categories';
import Button from '@mui/material/Button';
import { ButtonGroup, Typography, Stack, Box } from '@mui/material';

function Catagories(props) {
  return (
    <>
      <Typography data-testid='Categories' variant='h3' color='initial'>
        Catagories
      </Typography>
    <Box  sx={{ width: '15%', alignSelf: 'center' }}>
    <Stack>
        <Button
          data-testid='catButton'
          onClick={() => props.activateCategory()}
        >
          {props.showActiveCategoryProp ? 'Show All' : 'Show Category'}
        </Button>
        <ButtonGroup size="large"  variant='text'>
          {props.categoryProp.map((cat) => (
            <Button
              key={cat.id}
              onClick={() => props.changeCategory(cat.displayName)}
            >
              {cat.displayName}
            </Button>
          ))}
        </ButtonGroup>
      </Stack>
    </Box>

      <Typography variant='h4' color='initial'>
        Category: {props.activeCategoryProp ? props.activeCategoryProp : 'none'}
      </Typography>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    categoryProp: state.categories.categories,
    activeCategoryProp: state.categories.activeCategory,
    showActiveCategoryProp: state.categories.showActiveCategory,
  };
};

const mapDispatchToProps = {
  changeCategory,
  activateCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Catagories);
