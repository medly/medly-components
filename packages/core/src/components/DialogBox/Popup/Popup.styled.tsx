import { styled } from '@medly-components/utils';
import { Props } from './types';

export const Popup = styled('div')<Props>`
    background: ${({ theme }) => theme.modal.backgroundColor};
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: ${({ minHeight }) => minHeight || 'auto'};
    box-shadow: 0 0.4rem 3.2 ${({ theme }) => theme.modal.shadowColor};
    box-sizing: border-box;
    border-radius: 1.6rem;
    overflow-y: scroll;
    max-height: 80%;
    width: calc(100% - 2.4rem);
    padding: 2.4rem;
    max-width: 34.3rem;

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
