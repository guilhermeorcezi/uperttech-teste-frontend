import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Header,
  LogoContainer,
  ActionGroup,
  Content,
  TitleContainer,
  ProductContainer,
} from './styles';

import logo from '../../assets/logo.png';
import ProductItem from '../../components/ProductItem';

const Products: React.FC = () => (
  <Container>
    <Header>
      <LogoContainer>
        <img src={logo} alt="Uppertech" />
      </LogoContainer>

      <ActionGroup>
        <Link to="/">Quem somos</Link>
        <Link to="/"> Serviços</Link>
        <Link to="/">Soluções</Link>
      </ActionGroup>
    </Header>

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
