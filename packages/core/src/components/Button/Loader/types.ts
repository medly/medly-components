import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';
import { Props as ButtonProps } from '../types';

export type SVGProp = Omit<HTMLProps<HTMLOrSVGElement>, 'size'>;

export interface BtnLoaderProps extends SVGProp, WithThemeProp {
    size?: ButtonProps['size'];
    variant?: ButtonProps['variant'];
}
