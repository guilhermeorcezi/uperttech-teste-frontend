import React from 'react';

import { Container } from './styles';

import productImg from '../../assets/software.svg';

interface ProductProps {
  title: string;
}
const ProductItem: React.FC<ProductProps> = ({ title }) => (
  <Container>
    <img src={productImg} alt="Software Solution" />
    <h2>{title}</h2>
  </Container>
);

export default ProductItem;
