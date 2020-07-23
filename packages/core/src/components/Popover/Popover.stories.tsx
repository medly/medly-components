import { centerAligned, styled } from '@medly-components/utils';
import { boolean, select } from '@storybook/addon-knobs';
import React, { useCallback, useState } from 'react';
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
    display: inline-block;
    font-size: 20px;
    ${centerAligned()};
`;

const DummyWrapper = styled('div')`
    width: 100%;
    height: 100%;
    ${centerAligned()};
`;

const DummyPopover = styled('div')`
    color: white;
    padding: 1.5rem 2rem;
    background-color: grey;
    ${centerAligned()};
`;

export const WithClickInteraction = () => {
    const [isPopoverVisible, setPopoverVisibilityState] = useState(false),
        changePopoverState = useCallback(() => setPopoverVisibilityState(val => !val), []);

    return (
        <DummyWrapper>
            <PopoverWrapper
                showPopover={isPopoverVisible}
                onClick={changePopoverState}
                onOuterClick={changePopoverState}
                placement={select('Placement', placement, 'top')}
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
    const [isPopoverVisible, setPopoverVisibilityState] = useState(false),
        changePopoverState = useCallback(() => setPopoverVisibilityState(val => !val), []);

    return (
        <DummyWrapper>
            <PopoverWrapper
                showPopover={isPopoverVisible}
                onMouseEnter={changePopoverState}
                onMouseLeave={changePopoverState}
                placement={select('Placement', placement, 'top')}
            >
                <DummyDiv>Hello</DummyDiv>
                <Popover fullWidth={boolean('Popover Full Width', false)} fullHeight={boolean('Popover Full Height', false)}>
                    <DummyPopover>This is Popover</DummyPopover>
                </Popover>
            </PopoverWrapper>
        </DummyWrapper>
    );
};
