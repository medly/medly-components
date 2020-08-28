import { styled } from '@medly-components/utils';

export const InputSuffixStyled = styled.div<{ size: 'S' | 'M' }>`
    display: flex;
    align-items: center;

    button {
        margin-right: ${({ size }) => (size === 'S' ? '0.6rem' : '0.8rem')};
    }
`;
