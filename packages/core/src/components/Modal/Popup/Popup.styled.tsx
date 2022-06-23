import { breakpoints, media } from '@medly-components/utils';
import styled, { keyframes } from 'styled-components';
import { ModalPopupProps } from './types';

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

export const Popup = styled('div')<ModalPopupProps>`
    background: ${({ theme }) => theme.modal.backgroundColor};
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: ${({ minHeight }) => minHeight || '25.6rem'};
    box-shadow: 0 0.4rem 3.2 ${({ theme }) => theme.modal.shadowColor};
    box-sizing: border-box;
    border-top-left-radius: 1.6rem;
    border-top-right-radius: 1.6rem;
    overflow: ${({ overflowVisible }) => !overflowVisible && `hidden`};

    ${({ theme, open }) => media(breakpoints(theme.breakpoints).down('S'))`
        width: 100%;
        height: calc(100% - 2.4rem);
        animation: ${open ? mobileModalSlideIn : mobileModalSlideOut} 0.4s cubic-bezier(0, 0, 0.33, 1);
    `}

    ${({ theme, minWidth }) => media(breakpoints(theme.breakpoints).between('M', 'L'))`
        border-radius: ${theme.modal.borderRadius};
        max-width: 72%;
        min-width: ${minWidth || '42%'};
        max-height: 80%;
    `}

    ${({ theme, minWidth }) => media(breakpoints(theme.breakpoints).up('XL'))`
        border-radius: ${theme.modal.borderRadius};
        min-width: ${minWidth || `60.5rem`};
        max-width: 103.6rem;
        max-height: 80%;
    `}

    ${({ theme, open }) => media(breakpoints(theme.breakpoints).up('M'))`
        animation: ${open ? desktopModalSlideIn : desktopModalSlideOut} 0.2s cubic-bezier(0, 0, 0.33, 1);
    `}
`;
