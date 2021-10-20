import { getFontStyle } from '@medly-components/utils';
import styled from 'styled-components';
import Text from '../../Text';

export const BreadcrumbItemStyled = styled('li').attrs(({ theme: { breadcrumb } }) => ({ ...breadcrumb }))<{ disabled?: boolean }>`
    height: 100%;
    display: flex;
    align-items: center;
    pointer-events: ${({ disabled }) => disabled && 'none'};
    cursor: ${({ onClick, disabled }) => (disabled ? 'not-allowed' : onClick && 'pointer')};

    ${Text.Style} {
        user-select: none;
        color: ${({ theme, disabled }) => theme.breadcrumb.textColor[disabled ? 'disabled' : 'default']};
        ${({ theme }) => getFontStyle({ theme, fontVariant: 'button2' })}
    }

    &:hover {
        ${Text.Style} {
            color: ${({ theme, disabled }) => !disabled && theme.breadcrumb.textColor.hovered};
        }
    }
`;
