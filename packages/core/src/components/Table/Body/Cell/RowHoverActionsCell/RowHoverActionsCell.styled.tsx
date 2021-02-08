import { styled } from '@medly-components/utils';
import { RowHoverActionsCellProps } from './types';

export const RowHoverActionsWrapper = styled.td<RowHoverActionsCellProps>`
    position: absolute;
    right: 0;
    display: ${({ show }) => (show ? 'block' : 'none')};
    height: 100%;
`;

export const RowHoverActions = styled.div`
    position: relative;
    height: 100%;

    &::before {
        content: '';
        position: absolute;
        left: -1.2rem;
        width: 1.2rem;
        background: linear-gradient(to left, rgba(96, 120, 144, 0.15), rgba(96, 120, 144, 0));
        height: 100%;
    }
`;
