import React from 'react';
import Nav from 'components/organisms/Nav/Nav';
import styled from 'styled-components';

const StyledTemplate = styled.section`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledWrapper = styled.div`
  padding-top: 15vh;
  height: 100vh;
  width: 90%;
`;
const UserPageTemplate = ({ children }) => (
  <StyledTemplate>
    <Nav />
    <StyledWrapper> {children} </StyledWrapper>
  </StyledTemplate>
);

export default UserPageTemplate;
