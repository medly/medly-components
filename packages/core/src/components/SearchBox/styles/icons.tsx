import { SvgIcon } from '@medly-components/icons';
import { css, styled } from '@medly-components/utils';
import { SearchBoxProps } from '../types';
import { getIconWrapperStyle } from './utils';

export const CloseIconWrapper = styled.span<SearchBoxProps & { isTyping?: boolean; hasCustomSearchFilter?: boolean }>`
    ${getIconWrapperStyle};
    border-right: ${({ theme, isTyping }) => isTyping && `0.1rem solid ${theme.colors.grey[200]}`};
    margin: 0.6rem 0;
    padding-right: ${({ hasCustomSearchFilter }) => hasCustomSearchFilter && '0.4rem'};
    ${SvgIcon} {
        padding: ${({ theme, size }) => theme.searchBox.closeIcon.padding[size]};
        * {
            fill: ${({ theme }) => theme.searchBox.closeIcon.color.default};
        }
        &:hover {
            background: ${({ theme }) => theme.searchBox.closeIcon.bgColor.hovered};
            border-radius: ${({ theme }) => theme.searchBox.closeIcon.borderRadius};
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
        * {
            fill: ${({ theme: { searchBox }, areOptionsVisible }) => searchBox.searchIcon.color[areOptionsVisible ? 'active' : 'default']};
        }
        &:hover {
            background: ${({ theme: { searchBox }, isTyping }) => (isTyping ? searchBox.searchIcon.bgColor.hovered : 'transparent')};
            border-radius: ${({ theme }) => theme.searchBox.searchIcon.borderRadius};
        }
        &:active {
            background: ${({ theme }) => theme.searchBox.searchIcon.bgColor.pressed};
            * {
                fill: ${({ theme }) => theme.searchBox.searchIcon.color.pressed};
            }
        }
    }
`;

const expandIconHoveredStyle = css`
        background: ${({ theme }) => theme.searchBox.expandIcon.bgColor.hovered};
        border-radius: ${({ theme }) => theme.searchBox.expandIcon.borderRadius};
        * {
            fill: ${({ theme }) => theme.searchBox.expandIcon.color.hovered};
        }
    `,
    customSearchActiveStyle = css`
        ${SvgIcon} {
            ${expandIconHoveredStyle}
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
    `,
    customSearchNotActiveStyle = css`
        ${SvgIcon} {
            &:hover {
                ${expandIconHoveredStyle}
            }
        }
    `;

export const ExpandIconWrapper = styled.span<SearchBoxProps & { isCustomSearchActive?: boolean }>`
    ${getIconWrapperStyle}
    ${SvgIcon} {
        padding: ${({ theme, size }) => theme.searchBox.expandIcon.padding[size]};
        path {
            transition: transform 0.2s ease-out;
            transform-origin: center;
        }
        * {
            fill: ${({ theme }) => theme.searchBox.expandIcon.color.default};
        }
        &:active {
            background: ${({ theme }) => theme.searchBox.expandIcon.bgColor.pressed};
            * {
                fill: ${({ theme }) => theme.searchBox.expandIcon.color.pressed};
            }
        }
    }
    ${({ isCustomSearchActive }) => isCustomSearchActive ? customSearchActiveStyle : customSearchNotActiveStyle}
`;
