import { rgba } from 'polished';
import styled from 'styled-components';
import { StyledProps } from './types';

export const Actions = styled('div')<StyledProps>`
    display: flex;
    z-index: 10;
    padding: ${({ theme }) => `${theme.spacing.M1} ${theme.spacing.S4} 0 `};
    box-shadow: ${({ theme, scrollState, isSmallScreen }) =>
        !scrollState.scrolledToBottom && !isSmallScreen && `0 -1.8rem 1.6rem -1.6rem ${rgba(theme.colors.grey[400], 0.6)}`};
    flex-direction: row;
    justify-content: ${({ alignItems }) => (alignItems === 'left' ? 'flex-start' : alignItems === 'center' ? 'center' : 'flex-end')};

    & > * + * {
        margin-left: 1.6rem;
    }
`;
Actions.defaultProps = {
    alignItems: 'right'
};
