import { InjectClassName, styled } from '@medly-components/utils';

export const Prefix = styled(InjectClassName)<{ size?: 'S' | 'M' }>`
    pointer-events: none;
    margin-right: ${({ size }) => (size === 'S' ? '1.2rem' : '1.6rem')};
`;
