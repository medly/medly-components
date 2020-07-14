import { SvgIcon } from '@medly-components/icons';
import { styled } from '@medly-components/utils';
import { Props } from '../types';
import { getIconWrapperStyle } from './utils';

export const CloseIconWrapper = styled.span<Props & { isTyping?: boolean }>`
    ${getIconWrapperStyle};
    border-right: ${({ theme, isTyping }) => (isTyping ? `0.1rem solid ${theme.colors.grey[200]}` : '0 none')};
    margin: 0.6rem 0;
    ${SvgIcon} {
        * {
            fill: ${({
                theme: {
                    searchBox: { default: defaultTheme }
                }
            }) => defaultTheme.iconColor};
        }
        &:hover {
            background: ${({
                theme: {
                    searchBox: { default: defaultTheme }
                }
            }) => defaultTheme.iconBg};
            border-radius: 2.5rem;
            * {
                fill: ${({ theme }) => theme.colors.grey[900]};
            }
        }
    }
`;

export const SearchIconWrapper = styled.span<Props & { isActive?: boolean; isTyping?: boolean }>`
    ${getIconWrapperStyle};
    ${SvgIcon} {
        * {
            fill: ${({ theme: { searchBox }, isActive }) => (isActive ? searchBox.active.iconColor : searchBox.default.iconColor)};
        }
        &:hover {
            background: ${({ theme, isActive, isTyping }) => (isActive || isTyping ? theme.searchBox.active.iconBg : 'transparent')};
            border-radius: 2.5rem;
        }
    }
`;
