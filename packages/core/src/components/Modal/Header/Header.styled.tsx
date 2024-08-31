import { breakpoints, media } from '@medly-components/utils';
import { rgba } from 'polished';
import styled, { css } from 'styled-components';
import { getRemFromPx } from '../helpers';
import { Props } from './types';

const getBoxShadow = ({ scrollState, theme }: Props) => {
    const { scrollPosition } = scrollState;
    const scrollPositionRem = getRemFromPx(scrollPosition);

    return css`
        box-shadow: ${6.6 - scrollPositionRem < 2.1 && `0 1.8rem 1.6rem -1.6rem ${rgba(theme.colors.grey[400], 0.6)}`};

        ${({ theme }) => media(breakpoints(theme.breakpoints).up('M'))`
            box-shadow: ${!scrollState.scrolledToTop ? `0 1.8rem 1.6rem -1.6rem ${rgba(theme.colors.grey[400], 0.6)};` : ''}
        `}
    `;
};

export const Header = styled('div')<Props>`
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.modal.backgroundColor};
    width: 100%;
    border-top-left-radius: 1.2rem;
    border-top-right-radius: 1.2rem;
    z-index: 10;
    color: ${({ theme }) => theme.modal.headerColor};
    position: 'fixed';
    padding: ${({ theme }) => theme.modal.padding.header.mobile};
    ${getBoxShadow}

    ${({ theme }) => media(breakpoints(theme.breakpoints).up('M'))`
        padding: ${theme.modal.padding.header.desktop};
    `}
`;
