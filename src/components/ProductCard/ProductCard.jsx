import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useNavigate } from 'react-router-dom';
import { productsContext } from '../../contexts/productsContext';

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const {deleteProduct} = useContext(productsContext)
    return (
        <Card sx={{ maxWidth: 300, margin: "10px" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={item.image}      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description.length > 20? `${item.description.slice(0, 20)}...` : item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => deleteProduct(item.id)}><DeleteIcon /></Button>
        <Button size="small" onClick={() => navigate(`/products/edit/${item.id}`)} ><EditIcon/></Button>
        <Button size="small"><AddShoppingCartIcon/></Button>
        <Button size="small" onClick={() => navigate(`/products/${item.id}`)}><MoreHorizIcon/></Button>

      </CardActions>
    </Card>
    );
};

export default ProductCard;