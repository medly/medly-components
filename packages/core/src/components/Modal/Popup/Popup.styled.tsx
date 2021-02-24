import { keyframes, styled } from '@medly-components/utils';
import { Props } from './types';

const mobileModalSlideIn = keyframes`
    0% {
        transform: translateY(100%);
    }
    100% {
        transform: translateY(0);
    }
`,
    mobileModalSlideOut = keyframes`
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(100%);
        }
`,
    desktopModalSlideIn = keyframes`
        0% {
            opacity: 0;
            transform: translateY(-2rem);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
`,
    desktopModalSlideOut = keyframes`
        0% {
            opacity: 1;
            transform: translateY(0);
        }
        100% {
            opacity: 0;
            transform: translateY(-2rem);
        }
`;

export const Popup = styled('div')<Props>`
    background: ${({ theme }) => theme.modal.backgroundColor};
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: ${({ minHeight }) => minHeight || '25.6rem'};
    box-shadow: 0 0.4rem 3.2 ${({ theme }) => theme.modal.shadowColor};
    box-sizing: border-box;
    border-top-left-radius: 1.6rem;
    border-top-right-radius: 1.6rem;

    @media (max-width: 767px) {
        width: 100%;
        height: calc(100% - 2.4rem);
        animation: ${({ open }) => (open ? mobileModalSlideIn : mobileModalSlideOut)} 0.4s cubic-bezier(0, 0, 0.33, 1);
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

    @media (min-width: 768px) {
        animation: ${({ open }) => (open ? desktopModalSlideIn : desktopModalSlideOut)} 0.2s cubic-bezier(0, 0, 0.33, 1);
    }
`;
