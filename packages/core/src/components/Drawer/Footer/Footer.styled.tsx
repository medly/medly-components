import { styled } from '@medly-components/utils';
import { rgba } from 'polished';
import { DrawerFooterProps } from './types';

export const FooterStyled = styled('div')<{ showShadow: boolean } & DrawerFooterProps>`
    padding: 0 2.4rem;
    min-height: 4.2rem;
    box-shadow: ${({ theme, showShadow }) => showShadow && `0 -1.8rem 1.6rem -1.6rem ${rgba(theme.colors.grey[400], 0.6)}`};
    display: flex;
    flex-direction: row;
    justify-content: ${({ alignItems }) => (alignItems === 'left' ? 'flex-start' : alignItems === 'center' ? 'center' : 'flex-end')};

    & > * + * {
        margin-left: 1.6rem;
    }
`;
