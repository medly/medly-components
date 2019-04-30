import { storiesOf } from '@storybook/react';
import React from 'react';
import { wInfo } from '@medly-components/utils';
import Text from '../Text';
import { CssBaseline } from './CssBaseline.styled';

storiesOf('Components', module).add(
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
    wInfo(
        `The is global style based component that is required to be included in the main tree of your application. 
        It contains base resets and fonts links used by the library`
    )
);
