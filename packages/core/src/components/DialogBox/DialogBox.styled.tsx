import { styled } from '@medly-components/utils';
import { DialogBoxBackgroundProps, InnerContainerProps } from './types';

export const DialogBoxBackgroundStyled = styled.div<DialogBoxBackgroundProps>`
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.modal.overlayColor};
    z-index: 1000;
    align-items: center;
`;

export const InnerContainerStyled = styled.div<InnerContainerProps>`
    display: flex;
    flex-direction: column;

    /* overflow-y: auto;
    overflow-x: hidden; */

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

    @media (min-width: 768px) {
        overflow: hidden;
        flex: 1;

        &::-webkit-scrollbar-track {
            margin-top: 0;
        }
    }
`;
