import { defaultTheme } from '@medly-components/theme';
import { InjectClassName } from '@medly-components/utils';
import styled from 'styled-components';
import { SvgLoaderProps } from './types';

export const SvgLoaderStyled = styled(InjectClassName)<SvgLoaderProps>`
    font-size: ${({ theme, size }) => theme.loader.sizes[size!]};
    * {
        fill: ${({ theme, color }) => color || theme.loader.defaultColor};
    }
`;

SvgLoaderStyled.displayName = 'SvgLoader';
SvgLoaderStyled.defaultProps = {
    size: 'S',
    theme: defaultTheme
};
