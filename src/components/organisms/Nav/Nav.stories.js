import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Nav from './Nav';

storiesOf('Organismsm/Nav', module)
  .addDecorator(StoryRouter())
  .add('Normal', () => <Nav />);
