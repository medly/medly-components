import { LoaderSizes } from '@medly-components/theme';
import { HTMLProps, Omit } from '@medly-components/utils';

export type SVGProp = Omit<HTMLProps<SVGElement>, 'size'>;

export interface SvgLoaderProps extends SVGProp {
    /** Loader size */
    size?: LoaderSizes;
    /** Loader color */
    color?: string;
}
