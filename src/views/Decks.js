import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Deck from 'components/molecules/Deck/Deck';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';

const PageHeader = styled.div``;
const StyledGrid = styled.div`
  padding: 10px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 80px;
`;

const Decks = () => (
  <UserPageTemplate>
    <PageHeader>
      <h1>Decks</h1>
      <Input search placeholder="Deck name" />
    </PageHeader>
    <StyledGrid>
      <Deck name="first deck" cards="15" trials="4" lastTry="21-03-2013" />
      <Deck name="First deck" cards="15" trials="4" lastTry="21-03-2013" />
      <Deck name="First deck" cards="15" trials="4" lastTry="21-03-2013" />
      <Deck name="First deck" cards="15" trials="4" lastTry="21-03-2013" />
      <Deck name="First deck" cards="15" trials="4" lastTry="21-03-2013" />
      <Deck name="First deck" cards="15" trials="4" lastTry="21-03-2013" />
      <Deck name="First deck" cards="15" trials="4" lastTry="21-03-2013" />
      <Deck name="First deck" cards="15" trials="4" lastTry="21-03-2013" />
      <Deck name="First deck" cards="15" trials="4" lastTry="21-03-2013" />
      <Deck name="First deck" cards="15" trials="4" lastTry="21-03-2013" />
      <Deck name="First deck" cards="15" trials="4" lastTry="21-03-2013" />
    </StyledGrid>
  </UserPageTemplate>
);

export default Decks;
