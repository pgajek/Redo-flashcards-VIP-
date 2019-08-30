import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/mainTemplate';
import Decks from 'views/Decks';
import Cards from 'views/Cards';
import Account from 'views/Account';
import Card from 'components/molecules/Card/Card';

function Root() {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          {/* <Route exact path="/" component={start} /> */}
          <Route path="/decks" component={Decks} />
          <Route path="/cards" component={Cards} />
          <Route path="/account" component={Account} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  );
}

export default Root;
