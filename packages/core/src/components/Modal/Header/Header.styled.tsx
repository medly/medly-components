import { styled } from '@medly-components/utils';
import { rgba } from 'polished';
import { Props } from './types';

export const Header = styled('div')<Props>`
    z-index: 10;
    color: ${({ theme }) => theme.modal.headerColor};
    padding: ${({ theme }) => `0 ${theme.spacing.S4} ${theme.spacing.S4}`};
    box-shadow: ${({ theme, scrollState }) => !scrollState.scrolledToTop && `0 1.8rem 1.6rem -1.6rem ${rgba(theme.colors.grey[400], 0.6)}`};
`;
