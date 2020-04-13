import { defaultTheme } from '@medly-components/theme';
import { css, InjectClassName, styled } from '@medly-components/utils';
import { SvgIconProps } from './types';

export const SvgIconStyled = styled(InjectClassName)<SvgIconProps>`
    font-size: ${({ theme, size }) => theme.icon.sizes[size]};
    margin: ${({ margin }) => margin};
    cursor: ${({ onClick, disabled }) => (disabled ? 'not-allowed' : onClick ? 'pointer' : 'inherit')};
    * {
        fill: ${({ theme, color, disabled }) => (disabled ? theme.icon.disabledColor : color || theme.icon.defaultColor)};
    }
    ${({ onClick, theme, disabled }) =>
        !disabled &&
        onClick &&
        css`
            padding: 0.8rem;
            border-radius: 50%;
            &:hover {
                background-color: ${theme.icon.bgColor};
            }
        `}
`;

SvgIconStyled.displayName = 'SvgIcon';

SvgIconStyled.defaultProps = {
    size: 'S',
    theme: defaultTheme
};
