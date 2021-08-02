import { centerAligned, styled, css } from '@medly-components/utils';
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

const commonContentStyles = () => css`
    color: white;
    width: 150px;
    height: 50px;
    background-color: steelblue;
    display: inline-block;
    border-radius: 4px;
    ${centerAligned()};
`;

export const DummyDiv = styled('div')`
    ${commonContentStyles()};
    font-size: 20px;
`;

export const DummyWrapper = styled.div`
    width: 100%;
    height: 100%;
    ${centerAligned()};
`;

export const DummyPopover = styled.div`
    padding: 1rem 2rem;
    border: 1px solid;
    border-radius: 4px;
`;

export const PlacementPreviewWrapper = styled.div`
    display: grid;
    grid-row-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
`;

export const PlacementPreviewColumn = styled.div`
    ${centerAligned()};
`;

export const PlacementContent = styled.div`
    ${commonContentStyles()};
    font-size: 16px;
    text-transform: capitalize;
`;
