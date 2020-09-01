import { SvgIcon } from '@medly-components/icons';
import { css, getFontStyle, styled } from '@medly-components/utils';
import Options from '../SingleSelect/Options';
import { SearchIconWrapper } from './styles/icons';
import { getOptionsStyles } from './styles/options';
import { getBorderAndBoxShadow, getSearchBoxSize } from './styles/utils';
import { Props } from './types';

const getSmallSearchBoxStyle = ({ theme, areOptionsVisible }: Props & { areOptionsVisible?: boolean }) => {
    const border = theme.searchBox.borderRadius.S[areOptionsVisible ? 'active' : 'default'];
    return css`
        border-radius: ${areOptionsVisible ? `${border} ${border} 0 0` : border};
        input {
            ${getFontStyle({ theme, fontVariant: theme.searchBox.textVariant.S })}
            padding-left: 2rem;
        }
        ${SvgIcon} {
            padding: 0.2rem;
        }
    `;
};

const getMediumSearchBoxStyle = ({ theme, areOptionsVisible }: Props & { areOptionsVisible?: boolean }) => {
    const border = theme.searchBox.borderRadius.S[areOptionsVisible ? 'active' : 'default'];
    return css`
        border-radius: ${areOptionsVisible ? `${border} ${border} 0 0` : border};
        padding-right: 0.3rem;
        input {
            ${getFontStyle({ theme, fontVariant: theme.searchBox.textVariant.M })}
            padding-left: 2.4rem;
        }
        ${SvgIcon} {
            padding: 0.4rem;
        }
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

export const SearchBoxWrapper = styled.div<Props & { areOptionsVisible?: boolean }>`
    width: 25.6rem;
    display: flex;
    flex-direction: row;
    outline: none;
    box-sizing: border-box;
    height: ${getSearchBoxSize};
    border: 1.5px solid;
    position: relative;
    background-color: ${({ theme, areOptionsVisible }) => theme.searchBox.bgColor[areOptionsVisible ? 'active' : 'default']};

    &:hover {
        background-color: ${({ theme, areOptionsVisible }) => !areOptionsVisible && theme.searchBox.bgColor.hovered};
    }

    ${Options.Style} {
        ${getOptionsStyles};
    }
    ${({ size }) => (size === 'M' ? getMediumSearchBoxStyle : getSmallSearchBoxStyle)};
    ${({ areOptionsVisible }) => (areOptionsVisible ? activeSearchBoxStyle : nonActiveSearchBoxStyle)};
`;
