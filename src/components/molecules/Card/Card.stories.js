import React from 'react';
import Card from './Card';
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
`;

storiesOf('card', module)
  .addDecorator(story => <Bg>{story()}</Bg>)
  .add('card', () => <Card front="tutu" />);
