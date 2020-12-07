import { styled } from '@medly-components/utils';
import { Props } from './types';

export const Popup = styled('div')<Props>`
    background: ${({ theme }) => theme.modal.backgroundColor};
    overflow: hidden;
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

    @media (min-width: 768px) and (max-width: 1439px) {
        max-width: 24.5rem;
        min-width: ${({ minWidth }) => minWidth || '42%'};
        padding: 3.2rem;
    }

    @media (min-width: 1440px) {
        min-width: ${({ minWidth }) => minWidth || `60.5rem`};
        max-height: 80%;
    }
`;
