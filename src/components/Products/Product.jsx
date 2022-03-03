import { connect } from 'react-redux';
import { Button, Paper} from '@mui/material';

import { addItemToCart } from '../../store/products';

function Product({product, addItemToCart}){


  return(
    <Paper>
      {product.name} | {product.inventory}
      <Button onClick={() => addItemToCart(product)}>Add</Button>
    </Paper>
  )
}

const mapDispatchToProps = {
  addItemToCart
};

const mapStateToProps = (state) => {
return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
