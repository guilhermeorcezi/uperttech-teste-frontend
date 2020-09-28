import styled from 'styled-components';
import { shade } from 'polished';
import { Form as Unform } from '@unform/web';
import backgroundImg from '../../assets/background3.svg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${backgroundImg}) no-repeat;
  background-size: contain;

  h1 {
    font-size: 28px;
    color: #1d1d1d;
    margin-bottom: 12px;
  }
`;

export const Form = styled(Unform)`
  background: #fff;
  border-radius: 6px;
  padding: 30px;
  width: 400px;
  height: 340px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 18px;
    color: #00127e;
    margin-bottom: 20px;
  }
`;

export const Button = styled.button`
  background: #4d71fb;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#4d71fb')};
  }
`;

export const OptionContainer = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;

  button {
    color: #00127e;
    border: 0;
    background: transparent;
    outline: none;
  }
`;
