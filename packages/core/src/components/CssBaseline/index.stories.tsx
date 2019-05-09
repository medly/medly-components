import { storiesOf } from '@storybook/react';
import React from 'react';
import Text from '../Text';
import { CssBaseline } from './CssBaseline.styled';

storiesOf('Core', module).add(
    'CssBaseline',
    () => (
        <div>
            <CssBaseline />
            <Text textWeight="Light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
            <br />
            <Text textWeight="Normal">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
            <br />
            <Text textWeight="Strong">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
        </div>
    ),
    {
        props: {
            propTablesExclude: [Text, CssBaseline]
        },
        jsx: { skip: 1 }
    }
);
