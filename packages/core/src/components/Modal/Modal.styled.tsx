import { styled } from '@medly-components/utils';

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

export const HeaderContentStyled = styled.div`
    overflow-y: auto;
    overflow-x: hidden;

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
`;
