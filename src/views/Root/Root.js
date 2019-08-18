import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/mainTemplate';
import Decks from 'views/Decks';
import Cards from 'views/Cards';
import Account from 'views/Account';

function Root() {
  return (
    <MainTemplate>
      <BrowserRouter>
        <Switch>
          <Route path="/decks" component={Decks} />
          <Route path="/cards" component={Cards} />
          <Route path="/Account" component={Account} />
        </Switch>
        <h1>Decks</h1>
        <h1>Cards</h1>
        <h1>Account</h1>
      </BrowserRouter>
    </MainTemplate>
  );
}

export default Root;
