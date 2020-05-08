import { styled } from '@medly-components/utils';
import { StyledProps } from './types';

export const Cell = styled('td')<StyledProps>`
    padding: 0;
    padding: 1.5rem 2.4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${({ align }) => (align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center')};
`;
Cell.defaultProps = {
    align: 'left'
};
