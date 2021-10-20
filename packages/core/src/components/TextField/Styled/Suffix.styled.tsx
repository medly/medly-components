import { InjectClassName } from '@medly-components/utils';
import styled from 'styled-components';

export const Suffix = styled(InjectClassName)<{ size?: 'S' | 'M' }>`
    pointer-events: none;
    margin-left: ${({ size }) => (size === 'S' ? '1.2rem' : '1.6rem')};
`;
