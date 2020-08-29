import { css, InjectClassName, styled } from '@medly-components/utils';
import { SvgIconProps } from './types';

const hoverStyle = ({ theme, hoverBgColor, hoverIconColor }: SvgIconProps) => css`
    &:hover {
        background-color: ${hoverBgColor || theme.icon.colors.hovered.bgColor};
        * {
            fill: ${hoverIconColor || theme.icon.colors.hovered.iconColor};
        }
    }
`;

const solidStyle = ({ size, theme, disabled, bgColor, withHoverEffect }: SvgIconProps) => css`
    font-size: calc(${theme.icon.sizes[size].iconSize} + (2 * ${theme.icon.sizes[size].padding}));
    padding: ${theme.icon.sizes[size].padding};
    border-radius: ${theme.icon.borderRadius};
    background-color: ${disabled ? theme.icon.colors.disabled.bgColor : bgColor || theme.icon.colors.default.bgColor};

    ${!disabled && withHoverEffect && hoverStyle}
`;

const flatStyle = ({ size, theme }: SvgIconProps) => css`
    font-size: ${theme.icon.sizes[size].iconSize};
`;

export const SvgIconStyled = styled(InjectClassName).attrs(({ theme: { icon: { colors, sizes } } }) => ({
    colors,
    sizes
}))<SvgIconProps>`
    overflow: visible;
    box-sizing: border-box;
    transition: all 100ms linear;
    margin: ${({ margin }) => margin};
    cursor: ${({ onClick, disabled }) => (disabled ? 'not-allowed' : onClick ? 'pointer' : 'inherit')};
    * {
        fill-opacity: 1;
        fill: ${({ disabled, colors, iconColor }) => (disabled ? colors.disabled.iconColor : iconColor || colors.default.iconColor)};
    }

    ${({ variant }) => (variant === 'solid' ? solidStyle : flatStyle)}
`;

SvgIconStyled.displayName = 'SvgIcon';

SvgIconStyled.defaultProps = {
    size: 'M'
};
