import { SvgIcon } from '@medly-components/icons';
import { css, styled } from '@medly-components/utils';
import { SearchBoxProps } from '../types';
import { getIconWrapperStyle } from './utils';

export const CloseIconWrapper = styled.span<SearchBoxProps & { showCloseIcon?: boolean; hasCustomSearchFilter?: boolean }>`
    ${getIconWrapperStyle};
    border-right: ${({ theme, showCloseIcon }) => showCloseIcon && `0.1rem solid ${theme.colors.grey[200]}`};
    margin: 0.6rem 0;
    padding-right: ${({ hasCustomSearchFilter }) => hasCustomSearchFilter && '0.4rem'};
    ${SvgIcon} {
        padding: ${({ theme, size }) => theme.searchBox.closeIcon.padding[size]};
        border-radius: ${({ theme }) => theme.searchBox.closeIcon.borderRadius};
        * {
            fill: ${({ theme }) => theme.searchBox.closeIcon.color.default};
        }
        &:hover {
            background: ${({ theme }) => theme.searchBox.closeIcon.bgColor.hovered};
            * {
                fill: ${({ theme }) => theme.searchBox.closeIcon.color.hovered};
            }
        }
        &:active {
            background: ${({ theme }) => theme.searchBox.closeIcon.bgColor.pressed};
            * {
                fill: ${({ theme }) => theme.searchBox.closeIcon.color.pressed};
            }
        }
    }
`;

export const SearchIconWrapper = styled.span<SearchBoxProps & { areOptionsVisible?: boolean; isTyping?: boolean }>`
    ${getIconWrapperStyle};
    ${SvgIcon} {
        padding: ${({ theme, size }) => theme.searchBox.searchIcon.padding[size]};
        border-radius: ${({ theme }) => theme.searchBox.searchIcon.borderRadius};
        * {
            fill: ${({ theme: { searchBox }, areOptionsVisible }) => searchBox.searchIcon.color[areOptionsVisible ? 'active' : 'default']};
        }
        &:hover {
            background: ${({ theme: { searchBox }}) => searchBox.searchIcon.bgColor.hovered};
        }
        &:active {
            background: ${({ theme }) => theme.searchBox.searchIcon.bgColor.pressed};
            * {
                fill: ${({ theme }) => theme.searchBox.searchIcon.color.pressed};
            }
        }
    }
`;

const customSearchActiveStyle = css`
    ${SvgIcon} {
        background: ${({ theme }) => theme.searchBox.expandIcon.bgColor.active};
        path {
            transform: rotate(180deg);
        }

        * {
            fill: ${({ theme }) => theme.searchBox.expandIcon.color.active};
        }

        &:hover {
            background: ${({ theme }) => theme.searchBox.expandIcon.bgColor.active};
        }
    }
`

export const ExpandIconWrapper = styled.span<SearchBoxProps & { isCustomSearchActive?: boolean }>`
    ${getIconWrapperStyle}
    ${SvgIcon} {
        padding: ${({ theme, size }) => theme.searchBox.expandIcon.padding[size]};
        border-radius: ${({ theme }) => theme.searchBox.expandIcon.borderRadius};
        path {
            transition: transform 0.2s ease-out;
            transform-origin: center;
        }
        * {
            fill: ${({ theme }) => theme.searchBox.expandIcon.color.default};
        }
        &:hover {
            background: ${({ theme }) => theme.searchBox.expandIcon.bgColor.hovered};
        }
        &:active {
            background: ${({ theme }) => theme.searchBox.expandIcon.bgColor.pressed};
            * {
                fill: ${({ theme }) => theme.searchBox.expandIcon.color.pressed};
            }
        }
    }
    ${({ isCustomSearchActive }) => isCustomSearchActive && customSearchActiveStyle};
`;
