import { SvgIcon } from '@medly-components/icons';
import { defaultTheme } from '@medly-components/theme';
import { css, styled } from '@medly-components/utils';
import Options from '../SingleSelect/Options';
import { OptionStyled } from '../SingleSelect/Options/Option/Option.styled';
import { Props } from './types';

const getSearchBoxSize = ({ theme, size }: Props) => theme.searchBox.sizes[size].height;

const getIconWrapperStyle = ({ theme, size }: Props) => {
    return css`
        width: ${getSearchBoxSize};
        min-width: ${getSearchBoxSize};
        height: auto;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        ${SvgIcon} {
            cursor: pointer;
            font-size: ${theme.searchBox.sizes[size].iconSize};
        }
    `;
};

const getSmallSearchBoxStyle = ({ areOptionsVisible }: { areOptionsVisible?: boolean }) => {
    return css`
        border-radius: ${areOptionsVisible ? '2rem 2rem 0 0' : '4rem'};
        input {
            font-size: 1.4rem;
            line-height: 2.2rem;
            padding-left: 2rem;
        }
        ${Options.Style} {
            top: 3.6rem;
            border-radius: 0 0 2rem 2rem;
            li {
                padding: 0 2rem;
                span,
                strong {
                    font-size: 1.4rem;
                    line-height: 2.2rem;
                }
            }
            &::before {
                width: 82%;
            }
        }
        ${SvgIcon} {
            padding: 0.2rem;
        }
    `;
};

const getMediumSearchBoxStyle = ({ areOptionsVisible }: Props & { areOptionsVisible?: boolean }) => {
    return css`
        border-radius: ${areOptionsVisible ? '2.5rem 2.5rem 0 0' : '4rem'};
        padding-right: 3px;
        input {
            font-size: 1.6rem;
            line-height: 2.6rem;
            padding-left: 2.4rem;
        }
        ${Options.Style} {
            top: 4.4rem;
            border-radius: 0 0 2.5rem 2.5rem;
            li {
                padding: 0 2.4rem;
                span,
                strong {
                    font-size: 1.6rem;
                    line-height: 2.6rem;
                }
            }
            &::before {
                width: 82%;
            }
        }
        ${SvgIcon} {
            padding: 0.4rem;
        }
    `;
};

const activeOptionStyle = ({ theme }: Props) => {
    return css`
        border: 1.5px solid ${theme.searchBox.active.borderColor};
        border-top: 0;
        box-shadow: ${theme.searchBox.options.boxShadow};
        padding-bottom: 1.2rem;
        &::before {
            display: block;
            content: '';
            border-top: 0.1rem solid ${theme.colors.grey[200]};
            height: 0.1rem;
            margin: 0 auto 0.8rem;
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

export const SearchIconWrapper = styled.span<Props & { isActive?: boolean; isTyping?: boolean }>`
    ${getIconWrapperStyle};
    ${SvgIcon} {
        * {
            fill: ${({ theme: { searchBox }, isActive }) => (isActive ? searchBox.active.iconColor : searchBox.default.iconColor)};
        }
        &:hover {
            background: ${({ theme, isActive, isTyping }) => (isActive || isTyping ? theme.searchBox.active.iconBg : 'transparent')};
            border-radius: 2.5rem;
        }
    }
`;

export const CloseIconWrapper = styled.span<Props & { isTyping?: boolean }>`
    ${getIconWrapperStyle};
    border-right: ${({ theme, isTyping }) => (isTyping ? `0.1rem solid ${theme.colors.grey[200]}` : '0 none')};
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

const activeSearchBoxStyle = ({ theme }: Props) => {
    const {
        searchBox: { active }
    } = theme;
    return css`
        box-shadow: ${theme.searchBox.active.boxShadow};
        border-color: ${active.borderColor};
        border-width: 1.5px;
    `;
};

const nonActiveSearchBoxStyle = ({ theme }: Props) => {
    const {
        searchBox: { hover, active, default: defaultStyle }
    } = theme;

    return css`
        border-bottom: 1.5px solid;
        border-color: ${defaultStyle.borderColor};
        border-radius: 4rem;
        transition: border-color 100ms, box-shadow 100ms;
        &:focus-within {
            ${getBorderAndBoxShadow(active.borderColor, active.boxShadow)};
            ${SearchIconWrapper} {
                ${SvgIcon} {
                    * {
                        fill: ${active.borderColor};
                    }
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

export const SearchBoxWrapper = styled.div<Props & { isActive?: boolean; areOptionsVisible?: boolean }>`
    width: 25.6rem;
    display: flex;
    flex-direction: row;
    outline: none;
    box-sizing: border-box;
    height: ${getSearchBoxSize};
    border: 1.5px solid;
    position: relative;

    ${Options.Style} {
        box-shadow: none;
        border: none;
        box-sizing: content-box;
        left: -1.5px;
        overflow-x: hidden;
        overflow-y: auto;
        background-color: ${({ theme }) => theme.colors.white};
        ${({ isActive }) => (isActive ? activeOptionStyle : nonActiveOptionStyle)};
        max-height: ${({ theme, size }) => theme.searchBox.sizes[size].maxHeight};

        svg {
            display: none;
        }

        strong {
            font-weight: normal;
        }

        ${OptionStyled} {
            &:hover {
                background-color: ${({ theme }) => theme.colors.grey[50]};
            }
        }
    }

    ${({ size }) => (size === 'M' ? getMediumSearchBoxStyle : getSmallSearchBoxStyle)};
    ${({ isActive }) => (isActive ? activeSearchBoxStyle : nonActiveSearchBoxStyle)};
`;

export const SearchBox = styled.input<Props & { isActive?: boolean }>`
    background: transparent;
    color: ${({ theme, isActive }) => (isActive ? theme.colors.black : theme.searchBox.default.textColor)};
    padding: 0;
    outline: none;
    border: 0 none;
    width: 13rem;
    flex-grow: 1;
    font-family: inherit;
    font-weight: 600;

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
