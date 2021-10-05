import { HTMLProps, Omit } from '@medly-components/utils';
import { ButtonProps } from '../types';

export type SVGProp = Omit<HTMLProps<HTMLOrSVGElement>, 'size'>;

export interface BtnLoaderProps extends SVGProp {
    size: Required<ButtonProps>['size'];
    variant: Required<ButtonProps>['variant'];
}
