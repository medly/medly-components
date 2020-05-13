import { styled } from '@medly-components/utils';

export const Content = styled('div')`
    flex: 1;
    overflow: scroll;
    padding: ${({ theme }) => `0 ${theme.spacing.S4}`};

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
