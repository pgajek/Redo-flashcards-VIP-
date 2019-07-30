import React from 'react';
import Button from './Button';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import theme from 'theme/mainTheme';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('primarry', () => {
    const label = 'Colors';
    const options = {
      primarry: theme.darkTheme.lightGradient,
      secondary: theme.darkTheme.deepDark,
      tertiary: theme.darkTheme.light,
    };
    const defaultValue = 'hsl(49, 100%, 58%)';
    const groupId = 'GROUP-ID1';

    const value = select(label, options, defaultValue, groupId);
    return <Button color={value}>Kututut</Button>;
  })
  .add('secondary', () => <Button secondary>Secondary</Button>);
