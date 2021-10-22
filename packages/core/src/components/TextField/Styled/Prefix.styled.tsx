import { InjectClassName } from '@medly-components/utils';
import styled from 'styled-components';

export const Prefix = styled(InjectClassName)<{ size?: 'S' | 'M' }>`
    pointer-events: none;
    margin-right: ${({ size }) => (size === 'S' ? '1.2rem' : '1.6rem')};
`;
