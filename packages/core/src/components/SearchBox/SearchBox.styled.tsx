import { SvgIcon } from '@medly-components/icons';
import { defaultTheme } from '@medly-components/theme';
import { css, styled } from '@medly-components/utils';
import Options from '../SingleSelect/Options';
import { Props } from './types';

const getSearchBoxSize = ({ theme, searchBoxSize }: Props) => theme.searchBox.sizes[searchBoxSize].height;

const getIconWrapperStyle = ({ theme, searchBoxSize }: Props) => {
    return css`
        width: ${getSearchBoxSize};
        height: 100%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        ${SvgIcon} {
            cursor: pointer;
            font-size: ${theme.searchBox.sizes[searchBoxSize].iconSize};
        }
    `;
};

const getSmallOptionStyle = () => {
    return css`
        border-radius: 2rem 2rem 0 0;
        input {
            font-size: 1.4rem;
            line-height: 2.2rem;
            padding-left: 2rem;
        }
        ${Options.Style} {
            top: 3.8rem;
            border-radius: 0 0 2rem 2rem;
            li {
                span {
                    font-size: 1.4rem;
                    line-height: 2.2rem;
                }
            }
        }
        ${SvgIcon} {
            padding: 0.2rem;
        }
    `;
};

const getMediumOptionStyle = () => {
    return css`
        border-radius: 2.5rem 2.5rem 0 0;
        input {
            font-size: 1.6rem;
            line-height: 2.6rem;
            padding-left: 2.4rem;
        }
        ${Options.Style} {
            top: 4.6rem;
            border-radius: 0 0 2.5rem 2.5rem;
            li {
                span {
                    font-size: 1.6rem;
                    line-height: 2.6rem;
                }
            }
        }
        ${SvgIcon} {
            padding: 0.4rem;
        }
    `;
};

const activeOptionStyle = ({ theme }: Props) => {
    return css`
        border: solid 0.1rem ${theme.searchBox.active.borderColor};
        border-top: 0;
        box-shadow: 0 8px 16px rgba(96, 120, 144, 0.25);
        padding-bottom: 1.2rem;
        &::before {
            display: block;
            content: '';
            border-top: 1px solid ${theme.colors.grey[200]};
            width: 90%;
            height: 1px;
            margin: 0 auto 8px;
        }
    `;
};

const nonActiveOptionStyle = () => {
    return css`
        border: none;
        padding-bottom: 0;
        &::before {
            display: none;
        }
    `;
};

const getBorderAndBoxShadow = (color: string, boxShadow: string) => {
    return css`
        border-color: ${color};
        box-shadow: ${boxShadow};
    `;
};

const activeSearchBoxStyle = ({ theme }: Props) => {
    const {
        searchBox: { active }
    } = theme;
    return css`
        position: relative;
        box-shadow: 0 -0.8rem 1.6rem rgba(96, 120, 144, 0.25);
        border-bottom: 0 none;
        border-color: ${active.borderColor};
    `;
};

const nonActiveSearchBoxStyle = ({ theme }: Props) => {
    const {
        searchBox: { hover, active, default: defaultStyle }
    } = theme;

    return css`
        border-bottom: 0.1rem solid;
        border-color: ${defaultStyle.borderColor};
        border-radius: 4rem;
        &:focus-within {
            ${getBorderAndBoxShadow(active.borderColor, active.boxShadow)};
            ${SvgIcon} {
                * {
                    fill: ${active.borderColor};
                }
            }
        }
        &:hover {
            ${getBorderAndBoxShadow(hover.borderColor, hover.boxShadow)};
        }
        &:focus-within:hover {
            ${getBorderAndBoxShadow(active.borderColor, active.boxShadow)};
        }
    `;
};

export const SearchIconWrapper = styled('span')<Props & { isActive?: boolean }>`
    ${getIconWrapperStyle};
    ${SvgIcon} {
        * {
            fill: ${({ theme: { searchBox }, isActive }) => (isActive ? searchBox.active.iconColor : searchBox.default.iconColor)};
        }
        &:hover {
            background: ${({ theme }) => theme.searchBox.active.iconBg};
            border-radius: 2.5rem;
        }
    }
`;

export const CloseIconWrapper = styled('span')<Props & { isActive?: boolean }>`
    ${getIconWrapperStyle};
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
                fill: ${({ theme }) => theme.colors.black};
            }
        }
    }
    &::after {
        content: '';
        width: 1px;
        height: ${({ searchBoxSize }) => (searchBoxSize === 'M' ? '3.2rem' : '2.4rem')};
        background: ${({ theme }) => theme.colors.grey[200]};
        display: ${({ isActive }) => (isActive ? 'block' : 'none')};
        margin-left: 0.8rem;
    }
`;

export const SearchBoxWrapper = styled('div')<Props & { isActive?: boolean }>`
    width: 25.6rem;
    display: flex;
    flex-direction: row;
    outline: none;
    box-sizing: border-box;
    height: ${getSearchBoxSize};
    border: 0.1rem solid;

    ${Options.Style} {
        box-shadow: none;
        border: none;
        box-sizing: content-box;
        left: -1px;
        ${({ isActive }) => (isActive ? activeOptionStyle : nonActiveOptionStyle)};

        li {
            padding: 0 2rem;
            &:last-child {
                border-radius: 0 0 1rem 1rem;
            }
        }
    }

    ${({ searchBoxSize }) => (searchBoxSize === 'M' ? getMediumOptionStyle : getSmallOptionStyle)};
    ${({ isActive }) => (isActive ? activeSearchBoxStyle : nonActiveSearchBoxStyle)};
`;

export const SearchBox = styled('input')<Props & { isActive?: boolean }>`
    background: transparent;
    color: ${({ theme, isActive }) => (isActive ? theme.colors.black : theme.searchBox.default.textColor)};
    padding: 0;
    outline: none;
    border: 0 none;
    width: 13.6rem;
    flex-grow: 1;

    &::placeholder {
        color: ${({ theme }) => theme.searchBox.default.placeholderTextColor};
    }
    &:focus {
        &::placeholder {
            color: ${({ theme }) => theme.searchBox.active.placeholderTextColor};
        }
    }
`;

SearchBox.defaultProps = {
    theme: defaultTheme
};
