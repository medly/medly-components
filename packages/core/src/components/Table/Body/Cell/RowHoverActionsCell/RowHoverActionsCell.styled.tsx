import styled from 'styled-components';
import { RowHoverActionsWrapperProps } from './types';

export const RowHoverActionsWrapper = styled.div<RowHoverActionsWrapperProps>`
    position: absolute;
    right: 0;
    display: none;

    ${({ isRowHovered }) => isRowHovered && 'display: block'}
`;

export const RowHoverActions = styled.div`
    position: relative;

    &::before {
        content: '';
        position: absolute;
        left: -1.2rem;
        height: 100%;
        width: 1.2rem;
        background: linear-gradient(to left, rgba(96, 120, 144, 0.15), rgba(96, 120, 144, 0));
    }
`;
