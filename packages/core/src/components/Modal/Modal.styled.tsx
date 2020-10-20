import { styled } from '@medly-components/utils';
import { ContentHeaderProps } from './types';

export const ModalBackgroundStyled = styled('div')`
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

    @media (min-width: 768px) {
        align-items: center;
    }
`;

export const ContentHeaderStyled = styled.div<ContentHeaderProps>`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;

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

        &::-webkit-scrollbar-track {
            margin-top: 0;
        }
    }
`;
