import { styled } from '@medly-components/utils';

export const Container = styled.button`
    display: inline-grid;
    grid-auto-flow: column;
    grid-column-gap: 0.8rem;
    align-items: center;
    user-select: none;
    padding: 0;
    border: unset;
    background: transparent;
    cursor: ${({ onClick }) => onClick && 'pointer'};
`;
