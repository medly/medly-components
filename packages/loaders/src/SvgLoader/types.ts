import { LoaderSizes } from '@medly-components/theme';
import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';

export type SVGProp = Omit<HTMLProps<HTMLOrSVGElement>, 'size'>;

export interface Props extends SVGProp, WithThemeProp {
    /** Loader size */
    size?: LoaderSizes;
    /** Loader color */
    color?: string;
}
