import { breakpoints, media } from '@medly-components/utils';
import { rgba } from 'polished';
import styled from 'styled-components';
import { InnerContainerProps, ModalBackgroundProps } from './types';

export const ModalBackgroundStyled = styled.div<ModalBackgroundProps>`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.modal.overlayColor};
    z-index: 1000;
    animation: ${({ open }) => `${open ? 'modalFadeIn' : 'modalFadeOut'} 0.4s cubic-bezier(0, 0, 0.33, 1) `};

    @keyframes modalFadeIn {
        0% {
            background: ${({ theme }) => rgba(theme.modal.overlayColor, 0)};
        }
        100% {
            background: ${({ theme }) => rgba(theme.modal.overlayColor, 0.65)};
        }
    }

    @keyframes modalFadeOut {
        0% {
            background: ${({ theme }) => rgba(theme.modal.overlayColor, 0.65)};
        }
        100% {
            background: ${({ theme }) => rgba(theme.modal.overlayColor, 0)};
        }
    }

    @media (min-width: 768px) {
        align-items: center;
        animation: ${({ open }) => `${open ? 'modalFadeIn' : 'modalFadeOut'} 0.2s cubic-bezier(0, 0, 0.33, 1) `};
    }
`;

export const InnerContainerStyled = styled.div<InnerContainerProps>`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: ${({ overflowVisible }) => !overflowVisible && 'auto'};
    overflow-x: ${({ overflowVisible }) => !overflowVisible && 'hidden'};

    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webkit-scrollbar-track {
        background-color: transparent;
        margin-top: ${({ headerHeight }) => headerHeight / 10}rem;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 1rem;
        background-color: ${({ theme }) => theme.modal.scrollbarThumbColor};
    }

    ${({ theme, overflowVisible }) => media(breakpoints(theme.breakpoints).up('M'))`
        overflow: ${!overflowVisible ? 'hidden' : ''};

        &::-webkit-scrollbar-track {
            margin-top: 0;
        }
    `}
`;
