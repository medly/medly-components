import { SvgIcon } from '@medly-components/icons';
import { css, getFontStyle, styled } from '@medly-components/utils';
import Options from '../SingleSelect/Options';
import { SearchIconWrapper } from './styles/icons';
import { getOptionsStyles } from './styles/options';
import { getBorderAndBoxShadow, getSearchBoxSize } from './styles/utils';
import { SearchBoxProps } from './types';

const getBorderRadius = ({ theme, areOptionsVisible, size }: SearchBoxProps & { areOptionsVisible?: boolean }) => {
    const border = theme.searchBox.borderRadius[size][areOptionsVisible ? 'active' : 'default'];
    return css`
        border-radius: ${border};
    `;
};

const activeSearchBoxStyle = ({ theme: { searchBox } }: SearchBoxProps) => css`
    box-shadow: ${searchBox.boxShadow.active};
    border-color: ${searchBox.borderColor.active};
    border-width: 1.5px;
`;

const nonActiveSearchBoxStyle = ({ theme: { searchBox } }: SearchBoxProps) => css`
    border-bottom: 1.5px solid;
    border-color: ${searchBox.borderColor.default};
    transition: border-color 100ms, box-shadow 100ms;
    &:focus-within {
        ${getBorderAndBoxShadow(searchBox.borderColor.active, searchBox.boxShadow.active)};
        ${SearchIconWrapper} {
            ${SvgIcon} {
                * {
                    fill: ${searchBox.borderColor.active};
                }
            }
        }
    }
    &:hover {
        ${getBorderAndBoxShadow(searchBox.borderColor.hovered, searchBox.boxShadow.hovered)};
    }
    &:focus-within:hover {
        ${getBorderAndBoxShadow(searchBox.borderColor.active, searchBox.boxShadow.active)};
    }
`;

const searchBoxWithExpandStyle = () => css`
    padding-right: 0.8rem;

    span {
        width: unset;
        min-width: unset;
        margin-right: 0.4rem;

        &:last-of-type {
            margin-right: 0;
        }
    }
`;

export const SearchBoxWrapper = styled.div<
    SearchBoxProps & { areOptionsVisible?: boolean; hasCustomSearchFilter?: boolean; fullWidth?: boolean }
>`
    display: flex;
    flex-direction: row;
    outline: none;
    box-sizing: border-box;
    height: ${getSearchBoxSize};
    border: 1.5px solid;
    position: relative;
    padding: ${({ theme, size }) => theme.searchBox.padding[size]};
    background-color: ${({ theme, areOptionsVisible }) => theme.searchBox.bgColor[areOptionsVisible ? 'active' : 'default']};
    min-width: ${({ minWidth }) => minWidth};
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'min-content')};

    input {
        ${({ theme, size }) => getFontStyle({ theme, fontVariant: theme.searchBox.textVariant[size] })}
    }

    &:hover {
        background-color: ${({ theme, areOptionsVisible }) => !areOptionsVisible && theme.searchBox.bgColor.hovered};
    }

    ${Options.Style} {
        ${getOptionsStyles};
    }

    ${getBorderRadius};
    ${({ areOptionsVisible }) => (areOptionsVisible ? activeSearchBoxStyle : nonActiveSearchBoxStyle)};
    ${({ hasCustomSearchFilter }) => hasCustomSearchFilter && searchBoxWithExpandStyle}
`;
