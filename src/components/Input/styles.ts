import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  hasError: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #f8f8fc;
  border-radius: 10px;
  padding: 10px 16px;
  width: 100%;

  border: 2px solid #f8f8fc;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

  ${(props) => props.isFocused
    && css`
      color: #2b3137;
      border-color: #2b3137;
    `}

  ${(props) => props.isFilled
    && css`
      border-color: #2b3137;
      color: #2b3137;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: var(--color-text-complement);

    &::placeholder {
      color: '#666360';
    }
  }

  svg {
    margin-right: 16px;
  }
`;
