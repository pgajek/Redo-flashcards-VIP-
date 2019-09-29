import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/molecules/Card/Card';
import styled from 'styled-components';
import theme from 'theme/mainTheme';

const activeDeck = {
  id: 1,
  name: 'First deck',
  trials: 2,
  lastTry: '21-05-2019',
  cardsTab: [
    {
      id: 1,
      front: 'milk',
      back: 'leche',
    },
    {
      id: 2,
      front: 'milk5',
      back: 'leche',
    },
    {
      id: 3,
      front: 'milk4',
      back: 'leche',
    },
    {
      id: 4,
      front: 'milk3',
      back: 'leche',
    },
    {
      id: 5,
      front: 'milk2',
      back: 'leche',
    },
  ],
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding-bottom: 10vh;
`;
const BoxWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const StyledBox = styled.div`
  height: 50px;
  width: 50px;
  background-color: ${theme.darkTheme.deepDark};
`;
const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const Cards = () => {
  const deck = activeDeck;
  const activeCard = activeDeck.cardsTab[Math.floor(Math.random() * activeDeck.cardsTab.length)];

  return (
    <UserPageTemplate>
      <StyledWrapper>
        <h2>DECK NAME</h2>
        <CardWrapper>
          <Card front={activeCard.front} back={activeCard.back} />
        </CardWrapper>
        <BoxWrapper>
          <StyledBox>1/30</StyledBox> <StyledBox>2/30</StyledBox>
        </BoxWrapper>
      </StyledWrapper>
    </UserPageTemplate>
  );
};

export default Cards;
