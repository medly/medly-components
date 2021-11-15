import { select } from '@storybook/addon-knobs';
import Text from '../Text';
import { List } from './List';
import { ListProps } from './types';

const variants: Required<ListProps>['variant'][] = ['horizontal', 'vertical'];

export const Basic = () => (
    <List variant={select('Variant', variants, 'vertical')}>
        <Text> Item 1</Text>
        <Text> Item 2</Text>
        <Text> Item 3</Text>
    </List>
);
