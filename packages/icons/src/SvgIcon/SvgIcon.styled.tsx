import { defaultTheme } from '@medly-components/theme';
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

const solidStyle = ({ theme, disabled, bgColor, withHoverEffect }: SvgIconProps) => css`
    padding: ${theme.spacing.S2};
    border-radius: 50%;
    background-color: ${disabled ? theme.icon.colors.disabled.bgColor : bgColor || theme.icon.colors.default.bgColor};

    ${!disabled && withHoverEffect && hoverStyle}
`;

export const SvgIconStyled = styled(InjectClassName).attrs(({ theme: { icon: { colors, sizes } } }) => ({
    colors,
    sizes
}))<SvgIconProps>`
    overflow: visible;
    transition: all 100ms linear;
    font-size: ${({ sizes, size }) => sizes[size]};
    margin: ${({ margin }) => margin};
    cursor: ${({ onClick, disabled }) => (disabled ? 'not-allowed' : onClick ? 'pointer' : 'inherit')};
    * {
        fill-opacity: 1;
        fill: ${({ disabled, colors, iconColor }) => (disabled ? colors.disabled.iconColor : iconColor || colors.default.iconColor)};
    }

    ${({ variant }) => variant === 'solid' && solidStyle}
`;

SvgIconStyled.displayName = 'SvgIcon';

SvgIconStyled.defaultProps = {
    size: 'M',
    theme: defaultTheme
};
