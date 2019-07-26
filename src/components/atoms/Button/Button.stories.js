import React from 'react';
import Button from './Button';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

const label = 'Colors';
const options = {
  primarry: 'hsl(49, 100%, 58%)',
  secondary: 'hsl(196, 83%, 75%',
  tertiary: 'hsl(106, 47%, 64%)',
};
const defaultValue = 'hsl(49, 100%, 58%)';
const groupId = 'GROUP-ID1';

const value = select(label, options, defaultValue, groupId);

storiesOf('Button', module)
  .add('primarry', () => <Button color={value}>Kututut</Button>)
  .add('secondary', () => <Button secondary>Secondary</Button>);
