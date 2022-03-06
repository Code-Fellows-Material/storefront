import React, { useEffect } from 'react';

import Button from '@mui/material/Button';
import { ButtonGroup, Typography, Stack, Box } from '@mui/material';

import { changeCategory, activateCategory, get_categories } from '../../store/categories';
import {useDispatch, useSelector} from 'react-redux';

function Catagories() {

  let categoryState = useSelector(state => state.categories);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_categories);
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

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
