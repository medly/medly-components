import { SvgIcon } from '@medly-components/icons';
import { TabsTheme } from '@medly-components/theme/src';
import { css, styled, WithThemeProp } from '@medly-components/utils';
import { TextStyled } from '../../Text/Text.styled';
import { StyledProps } from './types';

const activeStyle = ({ theme, active, tabSize, tabStyle, tabBackground }: StyledProps & WithThemeProp) => {
    const {
        tabs: { textColor, backgroundColor }
    } = theme;
    return css`
        color: ${textColor.active};
        background-color: ${tabStyle === 'CLOSED' && tabBackground === 'WHITE' ? backgroundColor.active : backgroundColor.nonActive};
        border-right: ${tabStyle === 'CLOSED' ? `1px solid ${theme.colors.grey[300]}` : '0 none'};
        ${SvgIcon} {
            * {
                fill: ${active && tabSize !== 'S' ? backgroundColor.nonActive : textColor.active};
            }
        }
        &:hover {
            background-color: ${tabStyle === 'CLOSED' && tabBackground === 'WHITE' ? backgroundColor.active : backgroundColor.nonActive};
            ${TextStyled} {
                color: ${textColor.active};
            }
        }
    `;
};

const disabledStyle = (tabs: TabsTheme) => {
    return css`
        opacity: 0.4;
        &:hover {
            background-color: transparent;
            ${TextStyled} {
                color: ${tabs.textColor.nonActive};
            }
        }
    `;
};

const nonActiveStyle = ({ theme, tabStyle, tabBackground }: StyledProps & WithThemeProp) => {
    const {
        tabs: { textColor, backgroundColor }
    } = theme;
    return css`
        color: ${textColor.nonActive};
        border-right: ${tabStyle === 'CLOSED' ? `1px solid ${theme.colors.grey[300]}` : '0 none'};
        &:last-child {
            border-right: 0 none;
        }
        &:hover {
            background-color: ${tabBackground === 'GREY' ? backgroundColor.nonActive : backgroundColor.hovered};
            ${TextStyled} {
                color: ${tabBackground === 'GREY' ? textColor.nonActive : textColor.hovered};
            }
        }
    `;
};

const svgStyles = ({ theme, active, tabSize }: StyledProps & WithThemeProp) => {
    const {
        tabs: { textColor }
    } = theme;
    return css`
        ${SvgIcon} {
            border-radius: 50%;
            border: 1px solid ${active ? textColor.active : theme.colors.grey[100]};
            background-color: ${active ? textColor.active : theme.colors.grey[100]};
            padding: 0.5rem;
            font-size: ${tabSize === 'L' ? '2.8rem' : '2rem'};
        }
    `;
};

export const TabWrapper = styled.button<StyledProps>`
    border: 0;
    background-color: transparent;
    padding: 1.6rem;
    user-select: none;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row wrap;
    position: relative;

    ${TextStyled} {
        font-size: ${({ tabSize }) => (tabSize === 'S' ? '1.4rem' : '1.6rem')};
        line-height: ${({ tabSize }) => (tabSize === 'S' ? '2.2rem' : '2.6rem')};
    }

    p {
        line-height: 2.2rem;
        font-size: 1.4rem;
    }

    &::after {
        content: '';
        width: 100%;    
        display: block;
        height: 0.4rem;
        background-color: ${({ theme: { tabs }, active }) => (active ? `${tabs.textColor.active}` : 'transparent')};
        border-radius: 0.5rem 5rem 0 0;
        position: absolute;
        left: 0;
        bottom: 0;
    }

    &:hover {
        cursor: pointer;
        &::after {
            background-color: ${({ theme: { tabs }, active, tabBackground }) =>
                active
                    ? `${tabs.textColor.active}`
                    : tabBackground === 'GREY'
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

    ${({ tabSize, hasIcon }) => hasIcon && tabSize !== 'S' && svgStyles}

    ${({ active }) => !active && nonActiveStyle}

    ${({ active }) => active && activeStyle}

    ${({ theme: { tabs }, disabled }) => disabled && disabledStyle(tabs)}
`;

export const Count = styled.span<StyledProps>`
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.grey[600]};
    border-radius: 2.5rem;
    margin-left: 0.8rem;
    line-height: 1.2rem;
    padding: ${({ tabSize }) => (tabSize === 'S' ? '0.2rem 0.5rem' : '0.4rem 0.8rem')};
    font-size: ${({ tabSize }) => (tabSize === 'S' ? '1.1rem' : '1.2rem')};
`;

export const LabelAndDetailsWrapper = styled.div<StyledProps>`
    margin-left: ${({ hasIcon }) => (hasIcon ? '1.6rem' : 0)};
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
