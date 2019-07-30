import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import IconButton from './IconButton';
import styled from 'styled-components';
import githubicon from 'assets/icons/githubicon.svg';
import cardsicon from 'assets/icons/cardsicon.svg';
import googleicon from 'assets/icons/googleicon.svg';
import plusicon from 'assets/icons/plusicon.svg';
import wrongicon from 'assets/icons/wrongicon.svg';
import checkmark from 'assets/icons/checkmark.svg';
import foldersicon from 'assets/icons/foldersicon.svg';
import theme from 'theme/mainTheme';

const Bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background: ${theme.darkTheme.mainDark};
`;

storiesOf('IconButton', module)
  .addDecorator(story => <Bg>{story()}</Bg>)
  .add('cards', () => <IconButton icon={cardsicon} />)
  .add('github', () => <IconButton icon={githubicon} />)
  .add('google', () => <IconButton icon={googleicon} color="gray" />)
  .add('wrong', () => <IconButton icon={wrongicon} active/>)
  .add('plus', () => <IconButton icon={plusicon} />)
  .add('yes', () => <IconButton icon={checkmark} />)
  .add('folders', () => <IconButton icon={foldersicon} />)
  .add('foldersred', () => <IconButton icon={foldersicon} color="red" />);
