import styled from 'styled-components';
import { DialogBoxPopupProps } from './types';

export const Popup = styled('div')<DialogBoxPopupProps>`
    background: ${({ theme }) => theme.dialogBox.backgroundColor};
    display: flex;
    flex-direction: column;
    position: relative;
    box-shadow: 0 0.4rem 3.2 ${({ theme }) => theme.dialogBox.shadowColor};
    box-sizing: border-box;
    border-radius: ${({ theme }) => theme.dialogBox.borderRadius};
    overflow-y: auto;
    max-height: 80%;
    width: calc(100% - 4.8rem);
    padding: 2.4rem;

    @keyframes slideIn {
        0% {
            transform: translateY(4rem);
            opacity: 0;
        }
        25% {
            transform: translateY(4rem);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        0% {
            transform: translateY(0);
            opacity: 1;
        }
        25% {
            transform: translateY(0);
            opacity: 1;
        }
        100% {
            transform: translateY(4rem);
            opacity: 0;
        }
    }
    animation: ${({ open }) => `${open ? 'slideIn' : 'slideOut'} 0.4s cubic-bezier(0, 0, 0.33, 1) `};

    @media (min-width: 608px) {
        /* 506px break point + (2 * 2.4rem margin) */
        max-width: 56rem;
        padding: 3.2rem;

        &::-webkit-scrollbar {
            width: 0.5rem;
        }
        &::-webkit-scrollbar-track {
            background-color: transparent;
        }
        &::-webkit-scrollbar-thumb {
            border-radius: 1rem;
            background-color: ${({ theme }) => theme.dialogBox.scrollbarThumbColor};
        }
    }
`;
