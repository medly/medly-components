import { InjectClassName, styled } from '@medly-components/utils';

export const Suffix = styled(InjectClassName)<{ size?: 'S' | 'M' }>`
    pointer-events: none;
    margin-left: ${({ size }) => (size === 'S' ? '1.2rem' : '1.6rem')};
`;
