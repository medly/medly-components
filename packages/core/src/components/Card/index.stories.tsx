import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Text from '../Text';
import { CardStyled as Card } from './Card.styled';

storiesOf('Core', module).add('Card', () => (
    <Card width={text('Width', '250px')} height={text('Height', '250px')} center={boolean('Center', true)}>
        <Text textSize="L4" textWeight="Strong">
            55
        </Text>
        <Text textSize="L2" textWeight="Strong">
            PHARMACIES
        </Text>
    </Card>
));
