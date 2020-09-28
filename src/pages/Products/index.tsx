import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, TitleContainer, ProductContainer } from './styles';

import ProductItem from '../../components/ProductItem';
import Header from '../../components/Header';

const Products: React.FC = () => (
  <Container>
    <Header />

    <Content>
      <TitleContainer>
        <h1>Nossas soluções</h1>
      </TitleContainer>

      <ProductContainer>
        <ProductItem title="Solução 1" />
        <ProductItem title="Solução 2" />
        <ProductItem title="Solução 3" />
        <ProductItem title="Solução 4" />
      </ProductContainer>
    </Content>
  </Container>
);

export default Products;
