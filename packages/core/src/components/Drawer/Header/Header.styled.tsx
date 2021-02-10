import { rgba } from 'polished';
import { styled } from '@medly-components/utils';
import { CloseIcon } from '@medly-components/icons';

export const HeaderStyled = styled('div')<{ showShadow: boolean }>`
    padding: 1.6rem 2.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: ${({ theme, showShadow }) => showShadow && `0 1.8rem 1.6rem -1.6rem ${rgba(theme.colors.grey[400], 0.2)}`};
`;

export const CloseIconStyled = styled(CloseIcon)`
    border: 1px solid ${({ theme }) => theme.colors.grey[300]};
`;
