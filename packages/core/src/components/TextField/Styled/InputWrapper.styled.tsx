import { styled } from '@medly-components/utils';

export const InputWrapper = styled('div')<{ multiline: boolean; size: 'S' | 'M' }>`
    display: flex;
    position: relative;
    align-items: ${({ multiline }) => (multiline ? 'flex-start' : 'center')};
    background-color: transparent;
    flex: 1;
    height: 100%;
    padding-top: ${({ multiline, size }) => multiline && size === 'M' && `3rem`};
`;
