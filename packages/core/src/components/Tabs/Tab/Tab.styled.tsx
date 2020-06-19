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

const activeStyle = (theme: Theme, active: boolean, tabSize: TabSize) => {
    const {
        tabs: { textColor, backgroundColor, backgroundTheme, tabStyle }
    } = theme;

    if (backgroundTheme === 'WHITE' && tabStyle === 'CLOSED') {
        return css``;
    } else {
        return css`
            color: ${textColor.active};
            border-bottom: 4px solid ${textColor.active};
            ${SvgIcon} {
                * {
                    fill: ${active && tabSize !== 'S' ? backgroundColor.nonActive : textColor.active};
                }
            }
            &:hover {
                background-color: ${backgroundColor.nonActive};
                ${TextStyled} {
                    color: ${textColor.active};
                }
            }
        `;
    }
};

const disabledStyle = (theme: Theme) => {
    return css`
        opacity: 0.4;
        &:hover {
            background-color: transparent;
            ${TextStyled} {
                color: ${theme.tabs.textColor.nonActive};
            }
        }
    `;
};

const nonActiveStyle = (theme: Theme) => {
    const {
        tabs: { textColor, backgroundColor }
    } = theme;
    return css`
        color: ${textColor.nonActive};
        &:hover {
            background-color: ${backgroundColor.hovered};
            ${TextStyled} {
                color: ${textColor.hovered};
            }
        }
    `;
};

const svgStyles = (theme: Theme, active: boolean) => {
    const {
        tabs: { textColor }
    } = theme;
    return css`
        ${SvgIcon} {
            border-radius: 50%;
            border: 1px solid ${active ? textColor.active : theme.colors.grey[100]};
            background-color: ${active ? textColor.active : theme.colors.grey[100]};
            padding: 5px;
            font-size: 2rem;
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

    ${TextStyled} {
        font-size: ${({ tabSize }) => (tabSize === 'S' ? '1.4rem' : '1.6rem')};
        margin-left: ${({ hasIcon }) => (hasIcon ? '16px' : 0)};
    }

    &:hover {
        cursor: pointer;
    }

    &:focus {
        outline: none;
    }

    &:disabled {
        cursor: not-allowed;
    }

    ${({ theme, active, tabSize, hasIcon }) => hasIcon && tabSize !== 'S' && svgStyles(theme, active)}

    ${({ theme, active }) => !active && nonActiveStyle(theme)}

    ${({ theme, active, tabSize }) => active && activeStyle(theme, active, tabSize)}

    ${({ theme, disabled }) => disabled && disabledStyle(theme)}
`;
