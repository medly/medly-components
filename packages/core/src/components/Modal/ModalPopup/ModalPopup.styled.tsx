import { defaultTheme } from '@medly-components/theme';
import { styled } from '@medly-components/utils';
import { Props } from './types';

export const Popup = styled('div')<Props>`
    background: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.spacing.L1};
    border-radius: 24px;
    overflow: hidden;
    overflow-y: none;
    display: flex;
    flex-direction: column;
    max-width: 80%;
    max-height: 80%;
    min-width: ${({ minWidth }) => minWidth || `42%`};
    min-height: ${({ minHeight }) => minHeight || `256px`};

    @media (min-width: 768px) and (max-width: 1439px) {
        max-width: 72%;
    }

    @media (min-width: 1440px) {
        min-width: ${({ minWidth }) => minWidth || `605px`};
        max-width: 1036px;
    }
`;

Popup.defaultProps = {
    theme: defaultTheme
};
