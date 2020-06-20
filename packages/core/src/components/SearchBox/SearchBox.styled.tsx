import { SvgIcon } from '@medly-components/icons';
import { defaultTheme } from '@medly-components/theme';
import { styled } from '@medly-components/utils';
import Options from '../SingleSelect/Options';
import { Props } from './types';

const getSearchBoxSize = ({ theme, boxSize }: Props) => theme.searchBox.sizes[boxSize].height;

export const SearchBoxWrapper = styled('div')<Props>`
    position: relative;
    width: 25.6rem;

    hr {
        position: absolute;
        border-top: 1px solid ${({ theme }) => theme.searchBox.default.borderColor};
        width: 21.6rem;
        top: 4.7rem;
        left: 2rem;
        padding: 0;
        margin: 0;
        z-index: 10000;
        display: none;

        &.active {
            display: block;
        }
    }

    ${SvgIcon} {
        position: absolute;
        right: 1.2rem;
        top: 1.1rem;
        cursor: pointer;
        z-index: 10001;
        font-size: 2rem;
        background-color: ${({ theme }) => theme.searchBox.default.bgColor};
        padding: 2px;
        border-radius: 50%;

        * {
            fill: ${({ theme }) => theme.searchBox.default.iconColor};
        }

        &:hover {
            background-color: ${({ theme }) => theme.searchBox.default.iconBg};
        }

        &.active {
            path {
                fill: ${({ theme }) => theme.searchBox.active.iconColor};
            }

            &:hover {
                background-color: ${({ theme }) => theme.searchBox.active.iconBg};
            }
        }
    }

    ${Options.Style} {
        top: 4.7rem;
        border-radius: 0 0 2rem 2rem;
        box-shadow: none;
        border: none;
        padding-bottom: 0;

        li {
            padding: 0.4rem 2rem;
            font-size: 1.4rem;
        }

        &.active {
            padding-bottom: 1.2rem;
            border: solid 0.1rem ${({ theme }) => theme.searchBox.active.borderColor};
            border-top: 0;
            box-shadow: ${({ theme }) => theme.searchBox.options.boxShadow};
        }
    }
`;

export const SearchBox = styled('input')<Props>`
    height: ${getSearchBoxSize};
    width: 100%;
    background: ${({ theme }) => theme.searchBox.default.bgColor};
    box-sizing: border-box;
    border: 0.1rem solid ${({ theme }) => theme.searchBox.default.borderColor};
    font-size: 1.4rem;
    padding-left: 2rem;
    border-radius: 2rem;
    outline: none;
    color: ${({ theme }) => theme.searchBox.default.textColor};

    &.active {
        border-radius: 2rem 2rem 0 0;
        position: absolute;
        z-index: 10000;
        border: solid 0.1rem ${({ theme }) => theme.searchBox.active.borderColor};
        border-bottom: 0;

        &:hover,
        &:focus {
            border-bottom: 0;
        }
    }

    &::placeholder {
        color: ${({ theme }) => theme.searchBox.default.placeholderTextColor};
    }

    &:hover {
        border: solid 0.1rem ${({ theme }) => theme.searchBox.hover.borderColor};
        box-shadow: ${({ theme }) => theme.searchBox.hover.boxShadow};
    }

    &:focus {
        border: solid 0.1rem ${({ theme }) => theme.searchBox.active.borderColor};
        box-shadow: ${({ theme }) => theme.searchBox.active.boxShadow};

        ${SvgIcon} {
            * {
                fill: ${({ theme }) => theme.searchBox.active.borderColor};
            }
        }

        &::placeholder {
            color: ${({ theme }) => theme.searchBox.active.placeholderTextColor};
        }
    }
`;

export const CloseIconWrapper = styled('span')`
    position: absolute;
    right: 3.5rem;
`;

SearchBox.defaultProps = {
    theme: defaultTheme
};
