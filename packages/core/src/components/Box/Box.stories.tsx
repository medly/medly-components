import { defaultTheme } from '@medly-components/theme';
import { BoxProps } from './types';

export const fontVariants: Required<BoxProps>['fontVariant'][] = ['h1', 'h2', 'h3', 'h4', 'h5', 'body1', 'body2', 'body3'];
export const shadows: Required<BoxProps>['shadowSize'][] = ['S', 'M', 'L', 'XL'];

export const ThemeInterface: React.FC = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme
};
