import { getFontStyle, styled } from '@medly-components/utils';
import Text from '../../Text';

export const BreadcrumbItemStyled = styled('li').attrs(({ theme: { breadcrumb } }) => ({ ...breadcrumb }))`
    height: 100%;
    display: flex;
    align-items: center;
    cursor: ${({ onClick }) => onClick && 'pointer'};

    ${Text.Style} {
        user-select: none;
        color: ${({ theme }) => theme.breadcrumb.textColor.default};
        ${({ theme }) => getFontStyle({ theme, fontVariant: 'button2' })}
    }

    &:hover {
        ${Text.Style} {
            color: ${({ theme }) => theme.breadcrumb.textColor.hovered};
        }
    }
`;
