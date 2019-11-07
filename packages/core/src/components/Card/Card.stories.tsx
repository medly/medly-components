import { CardTheme } from '@medly-components/theme';
import { HTMLProps } from '@medly-components/utils';
import { boolean, select } from '@storybook/addon-knobs';
import React from 'react';
import Text from '../Text';
import { Card } from './Card';
import { FlowDirection, ItemsPosition, Props, Variants } from './types';

const variants: Variants[] = ['outlined', 'solid', 'flat'];
const itemsPosition: ItemsPosition[] = ['top', 'bottom', 'left', 'right', 'center'];
const flowDirection: FlowDirection[] = ['vertical', 'horizontal'];

export const ThemeInterface = (props: CardTheme): any => null;

export const Basic = (props: Omit<Props, keyof HTMLProps<HTMLDivElement>>) => (
    <Card
        variant={select('Variant', variants, 'outlined')}
        flowDirection={select('Flow Direction', flowDirection, 'horizontal')}
        alignItems={select('Items Position', itemsPosition, 'center')}
        separator={boolean('Separator', true)}
        withPadding={boolean('WithPadding', false)}
        clickable={boolean('Clickable', false)}
        fullWidth={boolean('Full Width', false)}
        fullHeight={boolean('Full Height', false)}
    >
        <Card variant="flat">
            <Text textWeight="Strong" textSize="L3">
                8
            </Text>
            <Text>Marks</Text>
        </Card>
        <Card variant="flat" flex={6} alignItems="left">
            <Text>1760712004</Text>
            <Text textSize="L2">Stevens, Hilary</Text>
            <Text>4 Atno Avenue, Morristown, NJ, 07960</Text>
        </Card>
    </Card>
);
