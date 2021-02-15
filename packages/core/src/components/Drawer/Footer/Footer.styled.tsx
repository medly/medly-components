import { styled } from '@medly-components/utils';
import { rgba } from 'polished';

export const FooterStyled = styled('div')<{ showShadow: boolean }>`
    padding: 0 2.4rem;
    box-shadow: ${({ theme, showShadow }) => showShadow && `0 -1.8rem 1.6rem -1.6rem ${rgba(theme.colors.grey[400], 0.2)}`};
`;
