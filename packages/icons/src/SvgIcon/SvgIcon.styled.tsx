import { InjectClassName } from '@medly-components/utils';
import styled, { css } from 'styled-components';
import { SvgIconTransientProps } from './types';

const hoverStyle = ({ $hoverBgColor, $hoverIconColor }: SvgIconTransientProps) => css`
    &:hover {
        background-color: ${({ theme }) => $hoverBgColor || theme.icon.colors.hovered.bgColor};
        * {
            fill: ${({ theme }) => $hoverIconColor || theme.icon.colors.hovered.iconColor};
        }
    }
`;

const solidStyle = ({ size, disabled, $bgColor, withHoverEffect }: SvgIconTransientProps) => css`
    padding: ${({ theme }) => theme.icon.sizes[size!].padding};
    border-radius: ${({ theme }) => theme.icon.borderRadius};
    background-color: ${({ theme }) => (disabled ? theme.icon.colors.disabled.bgColor : $bgColor || theme.icon.colors.default.bgColor)};

    ${!disabled && withHoverEffect && hoverStyle}
`;

export const SvgIconStyled = styled(InjectClassName).attrs(
    ({
        theme: {
            icon: { colors, sizes }
        }
    }) => ({
        colors,
        sizes
    })
)<SvgIconTransientProps>`
    overflow: visible;
    font-size: ${({ theme, size }) => theme.icon.sizes[size!].iconSize};
    transition: all 100ms linear;
    margin: ${({ margin }) => margin};
    cursor: ${({ onClick, disabled }) => (disabled ? 'not-allowed' : onClick ? 'pointer' : 'inherit')};
    * {
        fill-opacity: ${({ fillOpacity }) => fillOpacity};
        transition: all 100ms linear;
        fill: ${({ disabled, colors, $iconColor }) => (disabled ? colors.disabled.iconColor : $iconColor || colors.default.iconColor)};
    }

    ${({ variant }) => variant === 'solid' && solidStyle}
`;

SvgIconStyled.displayName = 'SvgIcon';
SvgIconStyled.defaultProps = {
    size: 'M',
    fillOpacity: 1
};
