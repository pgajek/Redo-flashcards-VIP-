import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ color }) => color || '#ffd82b'};
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.2s;
  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ color }) => color || '#e6e6e6'};
      width: 105px;
      height: 30px;
      font-size: 1rem;
    `}

  &:hover {
    filter: brightness(1.1);
  }
`;

export default Button;
