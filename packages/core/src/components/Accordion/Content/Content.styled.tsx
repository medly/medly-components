import styled from 'styled-components';

export const Wrapper = styled('div')<{ isActive: boolean }>`
    overflow: ${({ isActive }) => !isActive && 'hidden'};
    transition: all 200ms ${({ isActive }) => (isActive ? 'ease-in' : 'ease-out')};
    max-height: ${({ isActive }) => !isActive && 0};
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
`;
