import styled from 'styled-components';

export const InputWrapper = styled('div')<{ multiline?: boolean; size: 'S' | 'M' }>`
    display: flex;
    position: relative;
    align-items: ${({ multiline }) => (multiline ? 'flex-start' : 'center')};
    background-color: transparent;
    flex: 1;
    height: 100%;
`;
