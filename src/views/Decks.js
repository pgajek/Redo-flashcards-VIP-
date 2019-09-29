import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Deck from 'components/molecules/Deck/Deck';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';

const deckList = [
  {
    id: 1,
    name: 'First',
    cards: 14,
    trials: 0,
    lastTry: '21-05-2019',
  },
  { id: 2, name: 'second', cards: 24, trials: 4, lastTry: '21-05-2019' },
  { id: 3, name: 'third', cards: 144, trials: 2431, lastTry: '21-05-2019' },
  { id: 4, name: 'First', cards: 14, trials: 0, lastTry: '21-05-2019' },
  { id: 5, name: 'First', cards: 14, trials: 0, lastTry: '21-05-2019' },
  { id: 6, name: 'First', cards: 14, trials: 0, lastTry: '21-05-2019' },
  { id: 7, name: 'First', cards: 14, trials: 0, lastTry: '21-05-2019' },
  { id: 8, name: 'First', cards: 14, trials: 0, lastTry: '21-05-2019' },
];

const PageHeader = styled.div``;
const StyledGrid = styled.div`
  padding: 10px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 80px;
`;
const Styledh2 = styled.h2`
  color: #fff;
  font-size: 3rem;
  padding: 10px 0;
  text-shadow: 1px 1px 3px #000;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const Decks = () => (
  <UserPageTemplate>
    <PageHeader>
      <Styledh2>Decks</Styledh2>
      <Input search placeholder="Deck name" />
    </PageHeader>
    <StyledGrid>
      {deckList.map(({ id, name, cards, trials, lastTry }) => (
        <Deck id={id} key={id} name={name} cards={cards} trials={trials} lastTry={lastTry} />
      ))}
    </StyledGrid>
  </UserPageTemplate>
);

export default Decks;
