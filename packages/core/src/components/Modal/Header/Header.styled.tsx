import { css, styled } from '@medly-components/utils';
import { rgba } from 'polished';
import { Props } from './types';

const getPadding = ({ scrollState }: Props) => {
    const { scrollPosition } = scrollState;
    const scrollPositionRem = scrollPosition ? scrollPosition / 10 : 0;

    return css`
        position: ${6.6 - scrollPositionRem > 1.9 ? 'relative' : 'fixed'};
        padding: ${6.6 - scrollPositionRem > 1.9 ? '6.6rem' : '1.9rem'} 1.6rem 1.9rem 1.6rem;
    `;
};

const getShadow = ({ scrollState, theme }: Props) => {
    const { scrollPosition } = scrollState;
    const scrollPositionRem = scrollPosition ? scrollPosition / 10 : 0;

    return css`
        box-shadow: ${6.6 - scrollPositionRem < 1.9 && `0 1.8rem 1.6rem -1.6rem ${rgba(theme.colors.grey[400], 0.6)}`};
    `;
};

export const Header = styled('div')<Props>`
    background-color: ${({ theme }) => theme.modal.backgroundColor};
    width: 100%;
    border-top-left-radius: 1.6rem;
    border-top-right-radius: 1.6rem;
    z-index: 10;
    color: ${({ theme }) => theme.modal.headerColor};
    ${getPadding}
    ${getShadow}

    @media (min-width: 768px) {
        position: relative;
        padding: ${({ theme }) => `0 ${theme.spacing.S4} ${theme.spacing.S4}`};
    }
`;
