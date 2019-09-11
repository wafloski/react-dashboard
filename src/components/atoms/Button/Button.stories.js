import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Button from './Button';

storiesOf('Atoms/Button', module)
    .addDecorator(withKnobs)
    .add('Primary', () => {
        const label = 'Colors';
        const options = {
            Primary: 'hsl(50, 100%, 60%)',
            Secondary: 'hsl(70, 100%, 60%)',
            Tertiary: 'hsl(100,85%, 85%)'
        };
        const defaultValue = 'red';
        const groupId = 'GROUP-ID1';

        const value = select(label, options, defaultValue, groupId);
        return <Button color={value}>Helllo</Button>
    })
    .add('Secondary', () => <Button secondary>Hellooooo</Button>);