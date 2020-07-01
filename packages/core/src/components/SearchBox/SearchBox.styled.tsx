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
        box-shadow: ${({ theme }) => theme.searchBox.options.boxShadow};
    `;
};

const nonActiveOptionStyle = () => {
    return css`
        border: none;
        box-shadow: none;
    `;
};

const activeSearchBoxStyle = () => {
    return css`
        position: absolute;
        z-index: 10000;
    `;
};

export const SearchIconWrapper = styled('span')<Props & { isIconActive?: boolean }>`
    ${SvgIcon} {
        &:hover {
            background: ${({ theme, isIconActive }) => (isIconActive ? theme.searchBox.active.iconBg : 'transparent')};
            border-radius: 2.5rem;
        }
    }
`;

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
        }
        &:hover {
            ${getSearchIconAndBorderStyle(hover.borderColor)};
        }
        &:focus-within:hover {
            ${getSearchIconAndBorderStyle(active.borderColor)};
        }
    `;
};

export const CloseIconWrapper = styled('span')<{ isIconActive?: boolean }>`
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
        height: 3.2rem;
        background: ${({ theme }) => theme.colors.grey[200]};
        display: ${({ isIconActive }) => (isIconActive ? 'block' : 'none')};
        margin-left: 0.8rem;
    }
`;

export const SearchBoxWrapper = styled('div')<Props & { isActive?: boolean; isIconActive?: boolean; areOptionsVisible?: boolean }>`
    width: 25.6rem;
    border-radius: ${({ areOptionsVisible }) => (areOptionsVisible ? '2.5rem 2.5rem 0 0' : '2.5rem')};
    border: 0.1rem solid ${({ theme }) => theme.searchBox.default.borderColor};
    display: flex;
    flex-direction: row;
    outline: none;
    box-sizing: border-box;
    border-bottom: ${({ areOptionsVisible, theme }) =>
        areOptionsVisible ? '0 none' : `0.1rem solid ${theme.searchBox.default.borderColor}`};

    ${CloseIconWrapper}, ${SearchIconWrapper} {
        width: 4.8rem;
        height: 4.8rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    ${SvgIcon} {
        cursor: pointer;
        font-size: 2.4rem;
        padding: 0.4rem;

        * {
            fill: ${({ theme }) => theme.searchBox.default.iconColor};
        }
    }

    ${Options.Style} {
        top: 4.6rem;
        border-radius: 0 0 2.5rem 2.5rem;
        box-shadow: none;
        border: none;
        padding-bottom: ${({ isActive }) => (isActive ? '1.2rem' : '0')};
        box-sizing: content-box;
        left: -1px;
        ${({ isActive }) => (isActive ? activeOptionStyle : nonActiveOptionStyle)};

        &::before {
            content: '';
            display: ${({ areOptionsVisible }) => (areOptionsVisible ? 'block' : 'none')};
            border-top: 1px solid ${({ theme }) => theme.colors.grey[200]};
            width: 90%;
            height: 1px;
            margin: 0 auto 8px;
        }

        li {
            padding: 0 2rem;
            font-size: 1.4rem;
            line-height: 2.2rem;
            &:last-child {
                border-radius: 0 0 1rem 1rem;
            }
        }
    }

    ${({ isActive }) => (isActive ? activeSearchBoxStyle : nonActiveSearchBoxStyle)};
`;

export const SearchBox = styled('input')<Props & { isActive?: boolean }>`
    background: transparent;
    font-size: 1.4rem;
    padding: 0;
    padding-left: 2rem;
    outline: none;
    color: ${({ theme, isActive }) => (isActive ? theme.colors.black : theme.searchBox.default.textColor)};
    border: 0 none;

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
