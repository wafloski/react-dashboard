import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './Heading';

storiesOf('Atoms/Heading', module)
    .add('Normal', () => <Heading>Hello waflitto</Heading>)
    .add('Big', () => <Heading big>Hello waflitto</Heading>);