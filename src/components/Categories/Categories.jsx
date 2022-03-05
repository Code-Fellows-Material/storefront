import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { changeCategory, activateCategory } from '../../store/categories';
import Button from '@mui/material/Button';
import { ButtonGroup, Typography, Stack, Box } from '@mui/material';

import { get_categories } from '../../store/categories';
import {useDispatch, useSelector} from 'react-redux';

function Catagories(props) {


  let categoryState = useSelector(state => state.categories)

  console.log('categoryState', categoryState)

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_categories);
  }, [])

  return (
    <>
      <Typography data-testid='Categories' variant='h3' color='initial'>
        Catagories
      </Typography>
    <Box  sx={{ width: '50%', alignSelf: 'center' }}>
    <Stack>
        <Button
          data-testid='catButton'
          onClick={() => dispatch(activateCategory())}
        >
          {categoryState.showActiveCategory ? 'Show All' : 'Show Category'}
        </Button>
        <ButtonGroup size="large"  variant='text'>
          {categoryState.categories.map((cat) => (
            <Button
              key={cat._id}
              onClick={() => dispatch(changeCategory(cat.name))}
            >
              {cat.name}
            </Button>
          ))}
        </ButtonGroup>
      </Stack>
    </Box>

      <Typography variant='h4' color='initial'>
        Category: {categoryState.activeCategory ? categoryState.activeCategory : 'none'}
      </Typography>
    </>
  );
}

export default Catagories;
