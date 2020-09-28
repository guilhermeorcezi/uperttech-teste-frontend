import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, About } from './styles';
import Header from '../../components/Header';

const Landing: React.FC = () => (
  <Container>
    <Header />
    <Content>
      <About>
        <h1>Soluções inteligentes para modernizar sua empresa</h1>

        <span>
          Expertise em gerência de projetos e em desenvolvimento de software
          para produzir soluções que vão direto ao ponto.
        </span>

        <Link to="/sign">Solice um orçamento</Link>
      </About>
    </Content>
  </Container>
);

export default Landing;
