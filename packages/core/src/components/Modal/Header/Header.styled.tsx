import { css, styled } from '@medly-components/utils';
import { rgba } from 'polished';
import { Props } from './types';

const getPadding = ({ scrollState }: Props) => {
    const { scrollPosition } = scrollState;
    const scrollPositionRem = scrollPosition ? scrollPosition / 10 : 0;
    const topPadding = 6.6 - scrollPositionRem * 2 > 1.9 ? 6.6 - scrollPositionRem * 2 : 1.9;
    console.log(scrollPosition);
    return css`
        position: ${6.6 - scrollPositionRem > 1.9 ? 'relative' : 'fixed'};
        padding: ${topPadding}rem 1.6rem 1.9rem 1.6rem;
    `;
};

export const Header = styled('div')<Props>`
    z-index: 10;
    color: ${({ theme }) => theme.modal.headerColor};
    ${getPadding}
    box-shadow: ${({ theme, scrollState }) => !scrollState.scrolledToTop && `0 1.8rem 1.6rem -1.6rem ${rgba(theme.colors.grey[400], 0.6)}`};

    @media (min-width: 768px) {
        padding: ${({ theme }) => `0 ${theme.spacing.S4} ${theme.spacing.S4}`};
    }
`;
