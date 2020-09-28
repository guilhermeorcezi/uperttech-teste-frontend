import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
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
