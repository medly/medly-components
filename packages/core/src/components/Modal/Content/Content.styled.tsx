import { css, styled } from '@medly-components/utils';
import { getRemFromPx } from '../helpers';
import { StyledProps } from './types';

const getPadding = ({ scrollState, headerHeight }: StyledProps) => {
    const { scrollPosition } = scrollState;
    // divide pixel values by 10 for REM values
    const scrollPositionRem = getRemFromPx(scrollPosition);
    const headerHeightRem = getRemFromPx(headerHeight);

    // As the header/content area is scrolled, the top padding of the header component decreases from 6.6rem to 2.1rem.
    // When the top padding of the header component hits 2.1rem, the header becomes fixed. In order to keep the content
    // component positioned correctly, we add top padding to the content component equal to height of the (now fixed) header.
    return css`
        padding: ${({ theme }) => `0 ${theme.spacing.S4}`};
        padding-top: ${6.6 - scrollPositionRem > 2.1 ? '0' : `${headerHeightRem}rem `};

        @media (min-width: 768px) {
            padding-top: 0;
        }
    `;
};

export const Content = styled('div')`
    flex: 1;
    box-sizing: border-box;
    ${getPadding}

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
