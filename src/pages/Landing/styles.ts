import styled from 'styled-components';
import { shade } from 'polished';
import backgroundImg from '../../assets/background3.svg';
import art from '../../assets/art3.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${backgroundImg}) no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 60px;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    max-width: 200px;
  }
`;

export const ActionGroup = styled.div`
  a {
    text-decoration: none;
    font-size: 18px;
    color: #000;
  }

  a:first-child {
    font-weight: bold;
  }

  a:not(:last-child) {
    margin-right: 40px;

    &:hover {
      color: ${shade(0.001, '#000')};
    }
  }

  a:last-child {
    font-size: 18px;
    background: #4d71fb;
    padding: 15px 30px;
    color: #fff;
    transition: 0.5s ease-out;

    &:hover {
      background: ${shade(0.2, '#4d71fb')};
    }
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  padding-left: 100px;
  align-items: center;
  background: url(${art}) no-repeat;
  background-size: cover, contain;
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 45%;

  h1 {
    margin-bottom: 20px;
    color: #00127e;
    font-size: 48px;
  }

  span {
    margin-bottom: 50px;
    max-width: 400px;
    line-height: 27px;
    color: #1d1d1d;
  }

  a {
    max-width: 220px;
    text-decoration: none;
    text-align: center;
    padding: 15px 20px;
    font-size: 14px;
    background: #4d71fb;
    padding: 15pxx;
    color: #fff;
    font-weight: bold;
    transition: 0.5s ease-out;
    -webkit-box-shadow: 0px 4px 15px -4px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 4px 15px -4px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 4px 15px -4px rgba(0, 0, 0, 0.75);

    &:hover {
      background: ${shade(0.2, '#4d71fb')};
    }
  }
`;
