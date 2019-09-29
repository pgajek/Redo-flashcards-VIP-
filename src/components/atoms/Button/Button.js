import React from 'react';
import styled, { css } from 'styled-components';
import theme from 'theme/mainTheme';

const Button = styled.button`
  background: ${({ color }) => color || theme.darkTheme.lightGradient};
  width: ${({ width }) => (width ? width : '220px')};
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
      background: ${({ color }) => color || 'hsl(0, 0%, 90%)'};
      width: 105px;
      height: 30px;
      font-size: 1rem;
    `}

  &:hover {
    filter: brightness(1.3);
  }
`;

export default Button;
