import React from 'react';
import DeckDetailsTemplate from 'templates/deckDetailsTemplate';
import UserPageTemplate from 'templates/UserPageTemplate';
import { routes } from 'routes';

const CardsListPage = ({ match }) => {
  return (
    <>
      <UserPageTemplate>
        <DeckDetailsTemplate>{`is matched: ${match.path === routes.deck}`}</DeckDetailsTemplate>
      </UserPageTemplate>
    </>
  );
};

export default CardsListPage;
