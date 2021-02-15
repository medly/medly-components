import { styled } from '@medly-components/utils';
import { RowHoverActionsCellProps } from './types';

export const RowHoverActionsWrapper = styled.td<RowHoverActionsCellProps>`
    position: absolute;
    right: 0;
    display: ${({ show }) => (show ? 'block' : 'none')};
    height: 100%;
    padding: 0;
`;
