import { SvgIcon } from '@medly-components/icons';
import { styled } from '@medly-components/utils';
import { Props } from '../types';
import { getIconWrapperStyle } from './utils';

export const CloseIconWrapper = styled.span<Props & { isTyping?: boolean; showExpandIcon?: boolean }>`
    ${getIconWrapperStyle};
    border-right: ${({ theme, isTyping }) => isTyping && `0.1rem solid ${theme.colors.grey[200]}`};
    margin: 0.6rem 0;
    padding-right: ${({ showExpandIcon }) => (showExpandIcon ? '.4rem' : 0)};

    ${SvgIcon} {
        padding: ${({ theme, size }) => theme.searchBox.closeIcon.padding[size]};
        * {
            fill: ${({ theme }) => theme.searchBox.closeIcon.color.default};
        }
        &:hover {
            background: ${({ theme }) => theme.searchBox.closeIcon.bgColor.hovered};
            border-radius: ${({ theme }) => theme.searchBox.searchIcon.borderRadius};
            * {
                fill: ${({ theme }) => theme.searchBox.closeIcon.color.hovered};
            }
        }
    }
`;

export const SearchIconWrapper = styled.span<Props & { areOptionsVisible?: boolean; isTyping?: boolean }>`
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
    }
`;

export const ExpandIconWrapper = styled.span<Props & { isAdvancedSearchActive?: boolean }>`
    ${getIconWrapperStyle}
    ${SvgIcon} {
        padding: ${({ theme, size }) => theme.searchBox.expandIcon.padding[size]};
        * {
            fill: ${({ theme }) => theme.searchBox.expandIcon.color.default};
        }
        &:hover {
            background: ${({ theme }) => theme.searchBox.expandIcon.bgColor.hovered};
            border-radius: ${({ theme }) => theme.searchBox.expandIcon.borderRadius};
        }
    }

    transition: transform 0.2s ease-out;
    transform: ${({ isAdvancedSearchActive }) => (isAdvancedSearchActive ? 'rotate(180deg)' : 'none')};
`;
