import { styled } from '@medly-components/utils';
import { rgba } from 'polished';
import { StyledProps } from './types';

export const Actions = styled('div')<StyledProps>`
    display: flex;
    z-index: 10;
    padding: ${({ theme }) => `${theme.spacing.M1} ${theme.spacing.S4} 0`};
    box-shadow: ${({ theme, scrollState, isSmallScreen }) =>
        !scrollState.scrolledToBottom && !isSmallScreen && `0 -1.8rem 1.6rem -1.6rem ${rgba(theme.colors.grey[400], 0.6)}`};
    justify-content: ${({ alignItems }) => (alignItems === 'left' ? 'flex-start' : alignItems === 'center' ? 'center' : 'flex-end')};
    flex-direction: column;

    & > * + * {
        margin: 1.6rem 0;
    }
    @media (min-width: 768px) {
        flex-direction: row;
        
        & > * + * {
            margin: 0 0 0 1.6rem;
        }
    }
`;
Actions.defaultProps = {
    alignItems: 'right'
};
