import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ color }) => color || 'hsl(49, 100%, 58%)'};
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.2s;
  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ color }) => color || 'hsl(0, 0%, 90%)'};
      width: 105px;
      height: 30px;
      font-size: 1rem;
    `}

  &:hover {
    filter: brightness(1.1);
  }
`;

export default Button;
