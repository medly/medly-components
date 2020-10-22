import { styled } from '@medly-components/utils';
import { Props } from './types';

export const Popup = styled('div')<Props>`
    background: ${({ theme }) => theme.modal.backgroundColor};
    overflow: hidden;
    overflow-y: none;
    display: flex;
    flex-direction: column;
    height: calc(100% - 2.4rem);
    width: 100%;
    position: relative;
    min-height: ${({ minHeight }) => minHeight || '25.6rem'};
    box-shadow: 0 0.4rem 3.2 ${({ theme }) => theme.modal.shadowColor};
    box-sizing: border-box;
    border-top-left-radius: 1.6rem;
    border-top-right-radius: 1.6rem;
    animation: ${({ open, isSmallScreen }) =>
        isSmallScreen && `${open && isSmallScreen ? 'slideIn' : 'slideOut'} 0.5s cubic-bezier(0, 0, 0.33, 1) `};
    @keyframes slideIn {
        0% {
            transform: translateY(100%);
        }
        100% {
            transform: translateY(0);
        }
    }

    @keyframes slideOut {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(100%);
        }
    }

    @media (min-width: 768px) and (max-width: 1439px) {
        padding: ${({ theme }) => `${theme.spacing.L1} ${theme.spacing.M2}`};
        border-radius: ${({ theme }) => theme.modal.borderRadius};
        max-width: 72%;
        min-width: ${({ minWidth }) => minWidth || '42%'};
        max-height: 80%;
    }

    @media (min-width: 1440px) {
        padding: ${({ theme }) => `${theme.spacing.L1} ${theme.spacing.M2}`};
        border-radius: ${({ theme }) => theme.modal.borderRadius};
        min-width: ${({ minWidth }) => minWidth || `60.5rem`};
        max-width: 103.6rem;
        max-height: 80%;
    }
`;
