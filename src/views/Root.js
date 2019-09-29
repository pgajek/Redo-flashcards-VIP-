import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'templates/mainTemplate';
import Decks from 'views/Decks';
import Cards from 'views/Cards';
import Account from 'views/Account';
import CardsListPage from 'views/CardsListPage';
import { routes } from 'routes';

function Root() {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          {/* <Route exact path="/" component={start} /> */}
          <Route exact path={routes.home} render={() => <Redirect to="/decks" />} />
          <Route exact path={routes.decks} component={Decks} />
          <Route path={routes.deck} component={CardsListPage} />
          <Route path={routes.cards} component={Cards} />
          <Route path={routes.account} component={Account} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  );
}

export default Root;
