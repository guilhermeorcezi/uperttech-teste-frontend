import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

import { Container, LogoContainer, ActionGroup } from './styles';

const Header: React.FC = () => (
  <Container>
    <LogoContainer>
      <img src={logo} alt="Uppertech" />
    </LogoContainer>

    <ActionGroup>
      <Link to="/">Quem somos</Link>
      <Link to="/"> Serviços</Link>
      <Link to="/products">Soluções</Link>
    </ActionGroup>
  </Container>
);

export default Header;
