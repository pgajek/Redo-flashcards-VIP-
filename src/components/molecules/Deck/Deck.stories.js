import React from 'react';
import Deck from './Deck';
import { storiesOf, addDecorator } from '@storybook/react';
import styled from 'styled-components';
import theme from 'theme/mainTheme';

const Bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background: ${theme.darkTheme.mainDark};
  padding: 10px;
`;

storiesOf('deck', module)
  .addDecorator(story => <Bg>{story()}</Bg>)
  .add('deck', () => <Deck name="First Deck" cards="15" />);
