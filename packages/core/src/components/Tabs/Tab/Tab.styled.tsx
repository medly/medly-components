import { SvgIcon } from '@medly-components/icons';
import { Theme } from '@medly-components/theme/src';
import { css, styled } from '@medly-components/utils';
import { TextStyled } from '../../Text/Text.styled';
import { TabSize } from '../types';
import { StyledProps } from './types';

const getTabSpacing = (tabSize: TabSize, hasIcon = false) => {
    const verticalSpacing = 15;
    let spacing = verticalSpacing;

    if (tabSize === 'L') {
        spacing = verticalSpacing + 8;
    }

    if (hasIcon) {
        return spacing - 1;
    }
    return spacing;
};

const activeStyle = ({ theme, active, tabSize, hasIcon }: any) => {
    const { tabs } = theme;

    if (tabs.backgroundTheme === 'WHITE' && tabs.tabStyle === 'CLOSED') {
        return css``;
    } else {
        return css`
            color: ${tabs.activeTextColor};
            border-bottom: 4px solid ${tabs.activeTextColor};
            ${SvgIcon} {
                * {
                    fill: ${active && tabSize !== 'S' ? '#fff' : tabs.activeTextColor};
                }
            }
            &:hover {
                background-color: ${({ theme }) => theme.colors.white};
                ${TextStyled} {
                    color: ${({ theme }) => theme.colors.communityBlue[500]};
                }
            }
        `;
    }
};

const disabledStyle = ({ disabled, theme }: any) => {
    return css``;
};

const nonActiveStyle = (theme: Theme) => {
    return css`
        color: ${theme.tabs.nonActiveTextColor};
        &:hover {
            background-color: ${theme.colors.grey[50]};
            ${TextStyled} {
                color: ${({ theme }) => theme.colors.grey[800]};
            }
        }
    `;
};

export const Button = styled.button<StyledProps>`
    background-color: transparent;
    border: 0;
    border-bottom: 4px solid transparent;
    padding: ${({ tabSize, hasIcon }) => `${getTabSpacing(tabSize, hasIcon)}px ${16}px`};
    user-select: none;
    text-decoration: none;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;

    ${({ hasIcon, tabSize, theme, active }) =>
        hasIcon &&
        tabSize !== 'S' &&
        css`
            svg {
                border-radius: 50%;
                border: 1px solid ${active ? theme.colors.communityBlue[500] : theme.colors.grey[100]};
                background-color: ${active ? theme.colors.communityBlue[500] : theme.colors.grey[100]};
                padding: 5px;
                font-size: 2rem;
                * {
                    fill: ${active ? theme.colors.white : theme.colors.grey[600]};
                }
            }
        `}

    &:hover {
        cursor: pointer;
    }

    &:focus {
        outline: none;
    }

    &:disabled {
        cursor: not-allowed;
    }

    ${TextStyled} {
        font-size: ${({ tabSize }) => (tabSize === 'S' ? '1.4rem' : '1.6rem')};
        margin-left: ${({ hasIcon }) => (hasIcon ? '16px' : 0)};
    }

    ${({ active, theme }) => !active && nonActiveStyle(theme)}

    ${({ tabSize, active, theme, hasIcon }) => active && activeStyle({ theme, active, tabSize, hasIcon })}

    ${({ disabled, theme }) => disabled && disabledStyle({ disabled, theme })}
`;
