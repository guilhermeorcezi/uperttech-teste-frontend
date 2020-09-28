import styled from 'styled-components';
import backgroundImg from '../../assets/background3.svg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${backgroundImg}) no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 50px 80px 0px 80px;

  h1 {
    color: #00127e;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 8px;
  padding-left: 50px;
`;
