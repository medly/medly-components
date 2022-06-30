import { breakpoints, media } from '@medly-components/utils';
import { rgba } from 'polished';
import styled from 'styled-components';
import { StyledProps } from './types';

export const Actions = styled('div')<StyledProps>`
    display: flex;
    z-index: 10;
    padding: ${({ theme }) => `${theme.spacing.S4} ${theme.spacing.M2} ${theme.spacing.M2}`};
    box-shadow: ${({ theme, scrollState, isSmallScreen }) =>
        !scrollState.scrolledToBottom && !isSmallScreen && `0 -1.8rem 1.6rem -1.6rem ${rgba(theme.colors.grey[400], 0.6)}`};
    flex-direction: row;
    justify-content: ${({ alignItems }) => (alignItems === 'left' ? 'flex-start' : alignItems === 'center' ? 'center' : 'flex-end')};

    & > * + * {
        margin-left: 1.6rem;
    }

    ${({ theme }) => media(breakpoints(theme.breakpoints).down('S'))`
        padding: ${theme.spacing.S4};
    `}

    ${({ theme }) => `
        @media (min-width: ${theme.breakpoints.M.min}px) and (max-height: 700px) {
            padding: ${theme.spacing.S4} ${theme.spacing.M2};
        }
    `}
`;
Actions.defaultProps = {
    alignItems: 'right'
};
