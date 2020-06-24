import { SvgIcon } from '@medly-components/icons';
import { Theme } from '@medly-components/theme/src';
import { css, styled } from '@medly-components/utils';
import { TextStyled } from '../../Text/Text.styled';
import { TabSize } from '../types';
import { StyledProps, WrapperProps } from './types';

const getTabSpacing = (hasIcon = false) => {
    const verticalSpacing = 15;

    if (hasIcon) {
        return verticalSpacing - 1;
    }
    return verticalSpacing;
};

const activeStyle = (theme: Theme, active: boolean, tabSize: TabSize) => {
    const {
        tabs: { textColor, backgroundColor, tabStyle, backgroundTheme }
    } = theme;
    return css`
        color: ${textColor.active};
        background-color: ${tabStyle === 'CLOSED' && backgroundTheme === 'WHITE' ? backgroundColor.active : backgroundColor.nonActive};
        border-right: ${tabStyle === 'CLOSED' ? `1px solid ${theme.colors.grey[300]}` : '0 none'};
        ${SvgIcon} {
            * {
                fill: ${active && tabSize !== 'S' ? backgroundColor.nonActive : textColor.active};
            }
        }
        &:hover {
            background-color: ${tabStyle === 'CLOSED' && backgroundTheme === 'WHITE' ? backgroundColor.active : backgroundColor.nonActive};
            ${TextStyled} {
                color: ${textColor.active};
            }
        }
    `;
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
        tabs: { textColor, backgroundColor, tabStyle, backgroundTheme }
    } = theme;
    return css`
        color: ${textColor.nonActive};
        border-right: ${tabStyle === 'CLOSED' ? `1px solid ${theme.colors.grey[300]}` : '0 none'};
        &:hover {
            background-color: ${backgroundTheme === 'GREY' ? backgroundColor.nonActive : backgroundColor.hovered};
            ${TextStyled} {
                color: ${backgroundTheme === 'GREY' ? textColor.nonActive : textColor.hovered};
            }
        }
    `;
};

const svgStyles = (theme: Theme, active: boolean, tabSize: TabSize) => {
    const {
        tabs: { textColor }
    } = theme;
    return css`
        ${SvgIcon} {
            border-radius: 50%;
            border: 1px solid ${active ? textColor.active : theme.colors.grey[100]};
            background-color: ${active ? textColor.active : theme.colors.grey[100]};
            padding: 5px;
            font-size: ${tabSize === 'L' ? '2.8rem' : '2rem'};
        }
    `;
};

export const TabWrapper = styled.button<StyledProps>`
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    background: none;
    &::after {
        content: '';
        width: 100%;
        display: block;
        height: 4px;
        background-color: ${({ theme: { tabs }, active }) => (active ? `${tabs.textColor.active}` : 'transparent')};
        border-radius: 5px 5px 0 0;
    }
    &:hover {
        cursor: pointer;
        &::after {
            background-color: ${({ theme: { tabs }, active }) =>
                active
                    ? `${tabs.textColor.active}`
                    : tabs.backgroundTheme === 'GREY'
                    ? tabs.backgroundColor.nonActive
                    : `${tabs.backgroundColor.hovered}`};
        }
    }

    &:focus {
        outline: none;
    }

    &:disabled {
        cursor: not-allowed;
    }

    ${({ theme, active, tabSize, hasIcon }) => hasIcon && tabSize !== 'S' && svgStyles(theme, active, tabSize)}

    ${({ theme, active }) => !active && nonActiveStyle(theme)}

    ${({ theme, active, tabSize }) => active && activeStyle(theme, active, tabSize)}

    ${({ theme, disabled }) => disabled && disabledStyle(theme)}
`;

export const ClickableArea = styled.div<WrapperProps>`
    background-color: transparent;
    border: 0;
    padding: ${({ hasIcon }) => `${getTabSpacing(hasIcon)}px ${16}px`};
    user-select: none;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row wrap;

    ${TextStyled} {
        font-size: ${({ tabSize }) => (tabSize === 'S' ? '1.4rem' : '1.6rem')};
        line-height: ${({ tabSize }) => (tabSize === 'S' ? '2.2rem' : '2.6rem')};
    }

    p {
        line-height: 2.2rem;
        font-size: 1.4rem;
    }
`;

export const Count = styled.span<StyledProps>`
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.grey[600]};
    border-radius: 25px;
    margin-left: 8px;
    line-height: 1.2rem;
    padding: ${({ tabSize }) => {
        if (tabSize === 'S') {
            return '2px 5px';
        } else {
            return '4px 8px';
        }
    }};
    font-size: ${({ tabSize }) => {
        if (tabSize === 'S') {
            return '1.1rem';
        } else {
            return '1.2rem';
        }
    }};
`;

export const LabelAndDetailsWrapper = styled.div<StyledProps>`
    margin-left: ${({ hasIcon }) => (hasIcon ? '16px' : 0)};
`;

export const SecondaryLabel = styled.p<StyledProps>`
    margin: 0;
    text-align: left;
    color: ${({ theme }) => theme.colors.grey[600]};
`;

export const LabelWrapper = styled.div<StyledProps>`
    display: flex;
    align-items: center;
    ${TextStyled} {
        grid-area: label;
    }
`;
