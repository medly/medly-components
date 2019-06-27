import { centerAligned, styled } from '@medly-components/utils';
import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Popover, PopoverWrapper } from './Popover';
import { InteractionType, Placement } from './types';

const placement: Placement[] = [
    'top-start',
    'top',
    'top-end',
    'right-start',
    'right',
    'right-end',
    'bottom-start',
    'bottom',
    'bottom-end',
    'left-end',
    'left',
    'left-start'
];

const interactionType: InteractionType[] = ['click', 'hover'];

const DummyDiv = styled('div')`
    width: 200px;
    height: 100px;
    border: 1px solid grey;
    display: inline-block;
`;

const DummyWrapper = styled('div')`
    width: 100%;
    height: 100%;
    ${centerAligned()};
`;

const DummyPopover = styled('div')`
    border: 1px solid grey;
`;

storiesOf('Core', module).add(
    'Popver',
    () => (
        <DummyWrapper>
            <PopoverWrapper
                placement={select('Placement', placement, 'bottom')}
                interactionType={select('Interaction Type', interactionType, 'hover')}
            >
                <DummyDiv>Hello</DummyDiv>
                <Popover fullWidth={boolean('Popover Full Width', false)} fullHeight={boolean('Popover Full Height', false)}>
                    <DummyPopover>This is Popover</DummyPopover>
                </Popover>
            </PopoverWrapper>
        </DummyWrapper>
    ),
    {
        props: {
            propTablesExclude: [DummyDiv, DummyWrapper, DummyPopover]
        }
    }
);
