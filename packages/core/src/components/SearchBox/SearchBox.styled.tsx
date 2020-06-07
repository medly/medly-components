import { SvgIcon } from '@medly-components/icons';
import { defaultTheme } from '@medly-components/theme';
import { styled } from '@medly-components/utils';
import { Props } from './types';

const getSearchBoxSize = ({ theme, boxSize }: Props) => theme.searchBox.sizes[boxSize].height;

export const SearchBoxWrapper = styled('div')<Props>`
    position: relative;
    width: 25.6rem;

    ${SvgIcon} {
        position: absolute;
        right: 1.2rem;
        top: 1.1rem;
        cursor: pointer;
        * {
            fill: ${({ theme }) => theme.searchBox.iconColor};
        }
    }
`;

export const SearchBox = styled('input')<Props>`
    height: ${getSearchBoxSize};
    width: 100%;
    background: ${({ theme }) => theme.searchBox.bgColor};
    box-sizing: border-box;
    border: 0.1rem solid ${({ theme }) => theme.searchBox.borderColor};
    border-radius: 4.9rem;
    font-size: 1.4rem;
    padding-left: 2rem;
    outline: none;
    color: ${({ theme }) => theme.searchBox.textColor};

    &::placeholder {
        color: ${({ theme }) => theme.searchBox.placeholderTextColor};
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
    border: solid 1px red;
    position: absolute;
    right: 3rem;
`;

SearchBox.defaultProps = {
    theme: defaultTheme
};
