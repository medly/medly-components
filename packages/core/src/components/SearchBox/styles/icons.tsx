import { SvgIcon } from '@medly-components/icons';
import { styled } from '@medly-components/utils';
import { Props } from '../types';
import { getIconWrapperStyle } from './utils';

export const CloseIconWrapper = styled.span<Props & { isTyping?: boolean }>`
    ${getIconWrapperStyle};
    border-right: ${({ theme, isTyping }) => isTyping && `0.1rem solid ${theme.colors.grey[200]}`};
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

export const SearchIconWrapper = styled.span<Props & { areOptionsVisible?: boolean; isTyping?: boolean }>`
    ${getIconWrapperStyle};
    ${SvgIcon} {
        * {
            fill: ${({ theme: { searchBox }, areOptionsVisible }) =>
                areOptionsVisible ? searchBox.active.iconColor : searchBox.default.iconColor};
        }
        &:hover {
            background: ${({ theme, isTyping }) => (isTyping ? theme.searchBox.active.iconBg : 'transparent')};
            border-radius: 2.5rem;
        }
    }
`;
