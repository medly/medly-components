import { styled } from '@medly-components/utils';
import { Props } from './types';

export const Popup = styled('div')<Props>`
    background: ${({ theme }) => theme.modal.backgroundColor};
    display: flex;
    flex-direction: column;
    position: relative;
    box-shadow: 0 0.4rem 3.2 ${({ theme }) => theme.modal.shadowColor};
    box-sizing: border-box;
    border-radius: 1.6rem;
    overflow-y: scroll;
    max-height: 80%;
    width: calc(100% - 2.4rem);
    padding: 2.4rem;
    max-width: 34.3rem;

    @keyframes slideIn {
        0% {
            transform: translateY(4rem);
            opacity: 0;
        }
        40% {
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
        40% {
            transform: translateY(0);
            opacity: 1;
        }
        100% {
            transform: translateY(4rem);
            opacity: 0;
        }
    }

    @media (max-width: 767px) {
        animation: ${({ open }) => `${open ? 'slideIn' : 'slideOut'} 0.5s cubic-bezier(0, 0, 0.33, 1) `};
    }

    @media (min-width: 768px) {
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
            background-color: ${({ theme }) => theme.modal.scrollbarThumbColor};
        }
    }
`;
