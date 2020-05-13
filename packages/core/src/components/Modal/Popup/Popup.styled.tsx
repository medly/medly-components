import { styled } from '@medly-components/utils';
import { Props } from './types';

export const Popup = styled('div')<Props>`
    background: ${({ theme }) => theme.modal.backgroundColor};
    padding: ${({ theme }) => `${theme.spacing.L1} ${theme.spacing.M2}`};
    border-radius: ${({ theme }) => theme.spacing.M1};
    overflow: hidden;
    overflow-y: none;
    display: flex;
    flex-direction: column;
    max-height: 80%;
    position: relative;
    min-height: ${({ minHeight }) => minHeight || '25.6rem'};
    box-shadow: 0 0.4rem 3.2 ${({ theme }) => theme.modal.shadowColor};

    @media (min-width: 768px) and (max-width: 1439px) {
        max-width: 72%;
        min-width: ${({ minWidth }) => minWidth || '42%'};
    }

    @media (min-width: 1440px) {
        min-width: ${({ minWidth }) => minWidth || `60.5rem`};
        max-width: 103.6rem;
    }
`;
