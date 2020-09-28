import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Header,
  LogoContainer,
  ActionGroup,
  Content,
  About,
} from './styles';

import logo from '../../assets/logo.png';

const Landing: React.FC = () => (
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
      <About>
        <h1>Soluções inteligentes para modernizar sua empresa</h1>

        <span>
          Expertise em gerência de projetos e em desenvolvimento de software
          para produzir soluções que vão direto ao ponto.
        </span>

        <Link to="/">Solice um orçamento</Link>
      </About>

    </Content>
  </Container>
);

export default Landing;
