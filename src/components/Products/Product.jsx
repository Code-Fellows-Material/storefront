import { useDispatch } from 'react-redux';
import { Button, Paper} from '@mui/material';
import { addItemToCart } from '../../store/products';

function Product({product}){

  const dispatch = useDispatch()
  return(
    <Paper>
      {product.name} | {product.inventory}
      <Button onClick={() => dispatch(addItemToCart(product))}>Add</Button>
    </Paper>
  )
}

export default Product;
