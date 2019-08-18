import React from 'react';
import styled from 'styled-components';
import theme from 'theme/mainTheme';

const StyledWrapper = styled.div`
  min-height: 280px;
  min-width: 300px;
  box-shadow: 0 10px 30px -10px hsla(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: flex;
  background-color: ${theme.darkTheme.deepDark};
`;
const Front = styled.div``;
const Back = styled.div``;

const Card = ({ front, back }) => (
  <StyledWrapper>
    <Front>{front}</Front>
    <Back>{back}</Back>
  </StyledWrapper>
);
export default Card;
