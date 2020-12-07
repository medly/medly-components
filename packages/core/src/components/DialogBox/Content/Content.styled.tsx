import { styled } from '@medly-components/utils';

export const Content = styled('div')`
    flex: 1;
    box-sizing: border-box;

    @media (min-width: 768px) {
        overflow: auto;

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
