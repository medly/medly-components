import { styled } from '@medly-components/utils';

export const Wrapper = styled('div')<{ isActive: boolean }>`
    overflow: hidden;
    transition: all 200ms ${({ isActive }) => (isActive ? 'ease-in' : 'ease-out')};
    max-height: ${({ isActive }) => (isActive ? '100vh' : 0)};
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
`;
