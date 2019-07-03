import { defaultTheme } from '@medly-components/theme';
import { InjectClassName, styled } from '@medly-components/utils';
import { Props } from './types';

export const SvgLoaderStyled = styled(InjectClassName)<Props>`
    font-size: ${({ theme, size }) => theme.loader.sizes[size]};
    * {
        fill: ${({ theme, color }) => color || theme.loader.defaultColor};
    }
`;

SvgLoaderStyled.displayName = 'SvgLoader';

SvgLoaderStyled.defaultProps = {
    size: 'S',
    theme: defaultTheme
};
