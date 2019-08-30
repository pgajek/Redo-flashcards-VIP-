import React from 'react';
import styled, { css } from 'styled-components';
import theme from 'theme/mainTheme';
import checkmark from 'assets/icons/checkmark.svg';
const Input = styled.input`
  border: none;
  background: ${theme.darkTheme.deepDark};
  border-radius: 50px;
  transition: 0.5s;
  padding: 15px 30px;
  color: ${theme.darkTheme.text};

  ${({ search }) =>
    search &&
    css`
      background-img: url(${checkmark});
      background-size: 15px;
      background-position: 15px 50%;
      background-repeat: no-repeat;
    `}

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  &:focus {
    outline: none;
    box-shadow: none;
    background-color: #fff;
  }
`;

export default Input;
