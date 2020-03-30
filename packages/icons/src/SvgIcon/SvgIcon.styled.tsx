import { defaultTheme } from '@medly-components/theme';
import { InjectClassName, styled } from '@medly-components/utils';
import { SvgIconProps } from './types';

export const SvgIconStyled = styled(InjectClassName)<SvgIconProps>`
    font-size: ${({ theme, size }) => theme.icon.sizes[size]};
    margin: ${({ margin }) => margin};
    cursor: ${({ onClick }) => (onClick ? 'pointer' : 'inherit')};
    * {
        fill: ${({ theme, color }) => color || theme.icon.defaultColor};
    }
`;

SvgIconStyled.displayName = 'SvgIcon';

SvgIconStyled.defaultProps = {
    size: 'S',
    theme: defaultTheme
};
