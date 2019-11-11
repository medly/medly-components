import { centerAligned, styled } from '@medly-components/utils';
import { boolean, select } from '@storybook/addon-knobs';
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
    color: white;
    width: 200px;
    height: 100px;
    background-color: steelblue;
    border: 1px solid grey;
    display: inline-block;
    font-size: 20px;
    border-radius: 5px;
    ${centerAligned()};
`;

const DummyWrapper = styled('div')`
    width: 100%;
    height: 100%;
    ${centerAligned()};
`;

const DummyPopover = styled('div')`
    padding: 10px;
    color: black;
    border-radius: 5px;
    border: 1px solid grey;
    ${centerAligned()};
`;

export const Basic = () => (
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
);
