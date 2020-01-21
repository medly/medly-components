import { centerAligned, styled } from '@medly-components/utils';
import { boolean, select } from '@storybook/addon-knobs';
import { useState } from '@storybook/addons';
import React from 'react';
import Popover from './Popover';
import PopoverWrapper from './PopoverWrapper';
import { InteractionType, Placement } from './PopoverWrapper/types';

export const placement: Placement[] = [
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

export const Basic = () => {
    const [showPopover, setPopoverState] = useState(false);
    const changePopoverState = () => setPopoverState(val => !val);

    return (
        <DummyWrapper>
            <PopoverWrapper
                showPopover={showPopover}
                placement={select('Placement', placement, 'bottom')}
                interactionType={select('Interaction Type', interactionType, 'hover')}
            >
                <DummyDiv onClick={changePopoverState}>Hello</DummyDiv>
                <Popover fullWidth={boolean('Popover Full Width', false)} fullHeight={boolean('Popover Full Height', false)}>
                    <DummyPopover>This is Popover</DummyPopover>
                </Popover>
            </PopoverWrapper>
        </DummyWrapper>
    );
};
