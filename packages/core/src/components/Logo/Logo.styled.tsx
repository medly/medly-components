import { styled } from '@medly-components/utils';

export const Container = styled.div`
    display: inline-grid;
    grid-auto-flow: column;
    grid-column-gap: 0.8rem;
    align-items: center;
    user-select: none;
    cursor: ${({ onClick }) => onClick && 'pointer'};
`;
