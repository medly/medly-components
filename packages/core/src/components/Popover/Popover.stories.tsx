import { centerAligned, styled } from '@medly-components/utils';
import { InteractionType, Placement } from './types';

export const placements: Placement[] = [
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

export const interactionTypes: InteractionType[] = ['hover', 'click'];

export const DummyDiv = styled('div')`
    color: white;
    width: 200px;
    height: 100px;
    background-color: steelblue;
    display: inline-block;
    font-size: 20px;
    ${centerAligned()};
`;

export const DummyWrapper = styled('div')`
    width: 100%;
    height: 100%;
    ${centerAligned()};
`;

export const DummyPopover = styled('div')`
    color: white;
    padding: 1.5rem 2rem;
    background-color: grey;
    ${centerAligned()};
`;
