import { Box, Container } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { productsContext } from '../../contexts/productsContext';
import ProductCard from '../ProductCard/ProductCard';

const ProductsList = () => {
    const {getProducts, products} = useContext(productsContext)
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <Container>
            <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"}>
            {products.map((item) => <ProductCard key={item.id} item={item}/>)}
            </Box>
        </Container>
    );
};

export default ProductsList;