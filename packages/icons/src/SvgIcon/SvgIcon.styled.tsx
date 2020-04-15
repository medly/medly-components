import { defaultTheme } from '@medly-components/theme';
import { css, InjectClassName, styled } from '@medly-components/utils';
import { SvgIconProps } from './types';

export const SvgIconStyled = styled(InjectClassName)<SvgIconProps>`
    font-size: ${({ theme, size }) => theme.icon.sizes[size]};
    margin: ${({ margin }) => margin};
    cursor: ${({ onClick, disabled }) => (disabled ? 'not-allowed' : onClick ? 'pointer' : 'inherit')};
    transition: all 100ms linear;
    * {
        fill-opacity: 1;
        fill: ${({ theme, color, disabled }) => (disabled ? theme.icon.disabledIconColor : color || theme.icon.defaultIconColor)};
    }
    ${({ withHoverEffect, theme, disabled, color }) =>
        !disabled &&
        withHoverEffect &&
        css`
            padding: ${theme.spacing.S2};
            border-radius: 50%;
            &:hover {
                background-color: ${theme.icon.bgColor};
                * {
                    fill: ${color || theme.icon.hoverIconColor};
                }
            }
        `}
`;

SvgIconStyled.displayName = 'SvgIcon';

SvgIconStyled.defaultProps = {
    size: 'M',
    theme: defaultTheme
};
