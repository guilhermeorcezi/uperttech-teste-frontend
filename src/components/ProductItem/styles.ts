import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 300px;
  height: 220px;
  background: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  margin: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  -webkit-box-shadow: 4px 4px 5px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 4px 4px 5px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 4px 4px 5px -3px rgba(0, 0, 0, 0.75);

  img {
    max-width: 300px;
  }

  h2 {
    font-size: 18px;
    color: #031168;
  }

  &:hover {
    background: ${shade(0.03, '#fff')};
  }
`;
