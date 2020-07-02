import { SvgIcon } from '@medly-components/icons';
import { defaultTheme } from '@medly-components/theme';
import { css, styled } from '@medly-components/utils';
import Options from '../SingleSelect/Options';
import { Props } from './types';

const getSearchBoxSize = ({ theme, searchBoxSize }: Props) => theme.searchBox.sizes[searchBoxSize].height;

const activeOptionStyle = () => {
    return css`
        border: solid 0.1rem ${({ theme }) => theme.searchBox.active.borderColor};
        border-top: 0;
        box-shadow: 0 8px 16px rgba(96, 120, 144, 0.25);
    `;
};

const nonActiveOptionStyle = () => {
    return css`
        border: none;
    `;
};

const activeSearchBoxStyle = () => {
    return css`
        position: relative;
        box-shadow: 0 -0.8rem 1.6rem rgba(96, 120, 144, 0.25);
    `;
};

export const SearchIconWrapper = styled('span')<Props & { isActive?: boolean }>`
    ${SvgIcon} {
        * {
            fill: ${({ theme, isActive }) => (isActive ? theme.searchBox.active.iconColor : theme.searchBox.default.iconColor)};
        }
        &:hover {
            background: ${({ theme, isActive }) => (isActive ? theme.searchBox.active.iconBg : 'transparent')};
            border-radius: 2.5rem;
        }
    }
`;

const getBorderStyle = ({ isActive, searchBoxSize, theme }: Props & { isActive?: boolean }) => {
    const {
        searchBox: { active, default: defaultStyle }
    } = theme;
    return css`
        border: 0.1rem solid;
        border-bottom: ${isActive ? '0 none' : `0.1rem solid `};
        border-color: ${isActive ? active.borderColor : defaultStyle.borderColor};
        border-radius: ${isActive ? (searchBoxSize === 'M' ? '2.5rem 2.5rem 0 0' : '2rem 2rem 0 0') : '4rem'};
    `;
};

const getSearchIconAndBorderStyle = (color: string) => {
    return css`
        border-color: ${color};
        ${SearchIconWrapper} {
            ${SvgIcon} {
                * {
                    fill: ${color};
                }
            }
        }
    `;
};

const nonActiveSearchBoxStyle = ({ theme }: Props) => {
    const {
        searchBox: { hover, active }
    } = theme;

    return css`
        &:focus-within {
            ${getSearchIconAndBorderStyle(active.borderColor)};
            box-shadow: ${active.boxShadow};
        }
        &:hover {
            ${getSearchIconAndBorderStyle(hover.borderColor)};
            box-shadow: ${hover.boxShadow};
        }
        &:focus-within:hover {
            ${getSearchIconAndBorderStyle(active.borderColor)};
            box-shadow: ${active.boxShadow};
        }
    `;
};

export const CloseIconWrapper = styled('span')<Props & { isActive?: boolean }>`
    ${SvgIcon} {
        &:hover {
            background: ${({ theme }) => theme.searchBox.default.iconBg};
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
    height: ${({ theme, searchBoxSize }) => theme.searchBox.sizes[searchBoxSize].height};
    ${getBorderStyle};

    ${CloseIconWrapper}, ${SearchIconWrapper} {
        width: ${({ theme, searchBoxSize }) => theme.searchBox.sizes[searchBoxSize].height};
        height: 100%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    ${SvgIcon} {
        cursor: pointer;
        font-size: ${({ theme, searchBoxSize }) => theme.searchBox.sizes[searchBoxSize].iconSize};
        padding: ${({ searchBoxSize }) => (searchBoxSize === 'M' ? '0.4rem' : '0.2rem')};
    }

    ${Options.Style} {
        top: ${({ searchBoxSize }) => (searchBoxSize === 'M' ? '4.6rem' : '3.8rem')};
        border-radius: ${({ searchBoxSize }) => (searchBoxSize === 'M' ? '0 0 2.5rem 2.5rem' : '0 0 2rem 2rem')};
        box-shadow: none;
        border: none;
        padding-bottom: ${({ isActive }) => (isActive ? '1.2rem' : '0')};
        box-sizing: content-box;
        left: -1px;
        ${({ isActive }) => (isActive ? activeOptionStyle : nonActiveOptionStyle)};

        &::before {
            content: '';
            display: ${({ isActive }) => (isActive ? 'block' : 'none')};
            border-top: 1px solid ${({ theme }) => theme.colors.grey[200]};
            width: 90%;
            height: 1px;
            margin: 0 auto 8px;
        }

        li {
            padding: 0 2rem;
            span {
                font-size: ${({ searchBoxSize }) => (searchBoxSize === 'M' ? '1.6rem' : '1.4rem')};
                line-height: ${({ searchBoxSize }) => (searchBoxSize === 'M' ? '2.6rem' : '2.2rem')};
            }
            &:last-child {
                border-radius: 0 0 1rem 1rem;
            }
        }
    }

    ${({ isActive }) => (isActive ? activeSearchBoxStyle : nonActiveSearchBoxStyle)};
`;

export const SearchBox = styled('input')<Props & { isActive?: boolean }>`
    background: transparent;
    font-size: ${({ searchBoxSize }) => (searchBoxSize === 'M' ? '1.6rem' : '1.4rem')};
    line-height: ${({ searchBoxSize }) => (searchBoxSize === 'M' ? '2.6rem' : '2.2rem')};
    color: ${({ theme, isActive }) => (isActive ? theme.colors.black : theme.searchBox.default.textColor)};
    padding: 0;
    padding-left: 2rem;
    outline: none;
    border: 0 none;
    width: 14rem;
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
