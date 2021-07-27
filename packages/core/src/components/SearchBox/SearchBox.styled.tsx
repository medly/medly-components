import { SvgIcon } from '@medly-components/icons';
import { css, getFontStyle, styled } from '@medly-components/utils';
import Options from '../SingleSelect/Options';
import { SearchIconWrapper } from './styles/icons';
import { getOptionsStyles } from './styles/options';
import { getBorderAndBoxShadow, getSearchBoxSize } from './styles/utils';
import { Props } from './types';

const getBorderRadius = ({ theme, areOptionsVisible, size }: Props & { areOptionsVisible?: boolean }) => {
    const border = theme.searchBox.borderRadius[size][areOptionsVisible ? 'active' : 'default'];
    return css`
        border-radius: ${border};
    `;
};

const activeSearchBoxStyle = ({ theme: { searchBox } }: Props) => css`
    box-shadow: ${searchBox.boxShadow.active};
    border-color: ${searchBox.borderColor.active};
    border-width: 1.5px;
`;

const nonActiveSearchBoxStyle = ({ theme: { searchBox } }: Props) => css`
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
    width: 31.2rem;
    padding-right: 0.8rem;

    span {
        width: unset;
        min-width: unset;
        margin-right: 4px;

        &:last-of-type {
            margin-right: 0;
        }
    }
`;

export const SearchBoxWrapper = styled.div<Props & { areOptionsVisible?: boolean; showExpandIcon?: boolean }>`
    width: 25.6rem;
    display: flex;
    flex-direction: row;
    outline: none;
    box-sizing: border-box;
    height: ${getSearchBoxSize};
    border: 1.5px solid;
    position: relative;
    padding: ${({ theme, size }) => theme.searchBox.padding[size]};
    background-color: ${({ theme, areOptionsVisible }) => theme.searchBox.bgColor[areOptionsVisible ? 'active' : 'default']};

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
    ${({ showExpandIcon }) => showExpandIcon && searchBoxWithExpandStyle}
`;
