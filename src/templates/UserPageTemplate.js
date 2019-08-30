import React from 'react';
import Nav from 'components/organisms/Nav/Nav';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding-top: 150px;
`;

const UserPageTemplate = ({ children }) => (
  <>
    <Nav />
    <StyledWrapper> {children} </StyledWrapper>
  </>
);

export default UserPageTemplate;
