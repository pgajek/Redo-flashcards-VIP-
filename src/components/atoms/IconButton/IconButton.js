import React from 'react';
import styled, { css } from 'styled-components';
import theme from 'theme/mainTheme';

const IconButton = styled.button`
  display: block;
  width: 67px;
  max-height: 67px;
  height: 100%;
  border-radius: 20px;
  background: ${({ active }) => (active ? theme.darkTheme.light : 'transparent')};
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 60%;
  border: none;
  transition: 0.3s;

  cursor: pointer;
  ${({ color }) =>
    color &&
    css`
      background-color: ${({ color }) => color};
    `}
  :hover {
    background-color: ${theme.darkTheme.light};
  }
  &.active {
    background-color: ${theme.darkTheme.activeLink};
  }
`;

export default IconButton;
