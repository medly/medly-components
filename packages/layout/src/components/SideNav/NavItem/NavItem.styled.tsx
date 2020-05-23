import { Text } from '@medly-components/core';
import { SvgIcon } from '@medly-components/icons';
import { defaultTheme } from '@medly-components/theme';
import { css, styled } from '@medly-components/utils';
import { NavItemStyledProps } from './types';

const openNavStyle = ({ isActive, bgColor, navItemColors, navItemMinHeight }: NavItemStyledProps) => css`
    border-radius: ${`0 calc(${navItemMinHeight} / 2) calc(${navItemMinHeight} / 2) 0`};
    ${isActive
        ? css`
              border-color: ${navItemColors.active.textColor};
              background-color: ${navItemColors.active.bgColor};
              ${SvgIcon} {
                  * {
                      fill: ${navItemColors.active.textColor};
                  }
              }
          `
        : css`
              border-color: ${bgColor};
              &:hover {
                  border-color: ${navItemColors.hover.bgColor};
                  background-color: ${navItemColors.hover.bgColor};
                  ${Text.Style} {
                      color: ${navItemColors.hover.textColor};
                  }
                  ${SvgIcon} {
                      * {
                          fill: ${navItemColors.hover.textColor};
                      }
                  }
              }
          `};
`;

const closeNavStyle = ({ isActive, bgColor, navItemColors, iconSize, theme, navItemMinHeight }: NavItemStyledProps) => css`
    border-color: ${bgColor};
    ${SvgIcon} {
        padding: ${`calc((${navItemMinHeight} - ${theme.icon.sizes[iconSize]}) / 2) `};
        border-radius: 50%;
        ${isActive
            ? css`
                  background-color: ${navItemColors.active.bgColor};
                  * {
                      fill: ${navItemColors.active.textColor};
                  }
              `
            : css`
                  &:hover {
                      background-color: ${navItemColors.hover.bgColor};
                      * {
                          fill: ${navItemColors.hover.textColor};
                      }
                  }
              `}
    }
`;

export const NavItemStyled = styled('li').attrs(({ theme: { sideNav } }) => ({ ...sideNav }))<NavItemStyledProps>`
    width: 100%;
    border-left: ${({ theme }) => theme.spacing.S1} solid;
    text-decoration: none;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: ${({ openSize, closeSize, theme }) =>
        `calc(${closeSize} - ${theme.spacing.S2}) calc(${openSize} - ${closeSize} - ${theme.spacing.S4}) `};
    justify-items: center;
    align-items: center;
    overflow: hidden;
    user-select: none;
    min-height: ${({ navItemMinHeight }) => navItemMinHeight};
    transition: all 200ms ease-out;
    cursor: pointer;

    ${SvgIcon} {
        overflow: visible;
        font-size: ${({ theme, iconSize }) => theme.icon.sizes[iconSize]};
    }

    ${Text.Style} {
        text-overflow: ellipsis;
        white-space: nowrap;
        justify-self: left;
        transition: all 200ms ease-out;
        opacity: ${({ isHovered, isExpanded }) => (isHovered || isExpanded ? 1 : 0)};
        font-weight: ${({ theme }) => theme.font.weights.Medium};
        color: ${({ isActive, navItemColors }) => (isActive ? navItemColors.active.textColor : navItemColors.default.textColor)};
    }

    ${props => (props.isHovered || props.isExpanded ? openNavStyle(props) : closeNavStyle(props))};
`;

NavItemStyled.defaultProps = {
    theme: defaultTheme
};
