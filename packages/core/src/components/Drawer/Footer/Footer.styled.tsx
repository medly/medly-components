import { rgba } from 'polished';
import { styled } from '@medly-components/utils';

export const FooterStyled = styled('div')<{ showShadow: boolean }>`
    padding: 0 2.4rem;
    display: flex;
    justify-content: center;
    box-shadow: ${({ theme, showShadow }) => showShadow && `0 -1.8rem 1.6rem -1.6rem ${rgba(theme.colors.grey[400], 0.2)}`};
`;
