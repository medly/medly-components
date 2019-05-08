import { defaultTheme } from '@medly-components/theme';
import { InjectClassName, styled } from '@medly-components/utils';
import { Props } from './types';

export const SvgIconStyled = styled(InjectClassName)<Props>`
    font-size: ${({ theme, size }) => theme.icon.sizes[size]};
    &&& {
        * {
            fill: ${({ theme, color }) => color || theme.icon.colorPrimary} !important;
        }
    }
`;

SvgIconStyled.displayName = 'SvgIcon';

SvgIconStyled.defaultProps = {
    size: 'XS',
    theme: defaultTheme
};
