import React from 'react';
import styled from 'styled-components';
import theme from 'theme/mainTheme';

const Input = styled.input`
  border: none;
  background: ${theme.darkTheme.deepDark};
  border-radius: 50px;
  transition: 0.5s;
  padding: 15px 30px;
  box-shadow: 0px 1px 1px 1px #dddddd;
  position: absolute;
  top: 0;
  left: 0;
  color: ${theme.darkTheme.text};

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export default Input;
