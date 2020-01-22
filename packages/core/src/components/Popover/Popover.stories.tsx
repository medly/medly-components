import { centerAligned, styled } from '@medly-components/utils';
import { boolean, select } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import Popover from './Popover';
import PopoverWrapper from './PopoverWrapper';
import { Placement } from './PopoverWrapper/types';

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

export const WithClickInteraction = () => {
    const [isPopoverVisible, setPopoverVisibilityState] = useState(false);

    const showPopover = () => setPopoverVisibilityState(true),
        hidePopover = () => setPopoverVisibilityState(false);

    return (
        <DummyWrapper>
            <PopoverWrapper
                showPopover={isPopoverVisible}
                onClick={showPopover}
                onOuterClick={hidePopover}
                placement={select('Placement', placement, 'bottom')}
            >
                <DummyDiv>Hello</DummyDiv>
                <Popover fullWidth={boolean('Popover Full Width', false)} fullHeight={boolean('Popover Full Height', false)}>
                    <DummyPopover>This is Popover</DummyPopover>
                </Popover>
            </PopoverWrapper>
        </DummyWrapper>
    );
};

export const WithHoverInteraction = () => {
    const [isPopoverVisible, setPopoverVisibilityState] = useState(false);

    const showPopover = () => setPopoverVisibilityState(true),
        hidePopover = () => setPopoverVisibilityState(false);

    return (
        <DummyWrapper>
            <PopoverWrapper
                showPopover={isPopoverVisible}
                onMouseEnter={showPopover}
                onMouseLeave={hidePopover}
                placement={select('Placement', placement, 'bottom')}
            >
                <DummyDiv>Hello</DummyDiv>
                <Popover fullWidth={boolean('Popover Full Width', false)} fullHeight={boolean('Popover Full Height', false)}>
                    <DummyPopover>This is Popover</DummyPopover>
                </Popover>
            </PopoverWrapper>
        </DummyWrapper>
    );
};
