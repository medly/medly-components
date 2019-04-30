import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { wInfo } from '../../utils/wInfo';
import Text from '../Text';
import List from './List';
import { Props } from './types';

const variant: Array<Props['variant']> = ['horizontal', 'vertical'];

storiesOf('Components', module).add(
    'List',
    () => (
        <List variant={select('Variant', variant, 'vertical')}>
            <Text> Item 1</Text>
            <Text> Item 2</Text>
            <Text> Item 3</Text>
        </List>
    ),
    wInfo('List component to show show the list either horizontaly or vertically')
);
