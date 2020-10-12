import { styled } from '@medly-components/utils';

export const InputWrapper = styled('div')<{ multiline: boolean }>`
    display: flex;
    position: relative;
    align-items: ${({ multiline }) => (multiline === true ? 'flex-start' : 'center')};
    background-color: transparent;
    flex: 1;
    height: 100%;
`;
