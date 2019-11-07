import { IconSizes } from '@medly-components/theme';
import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';

export type SVGProp = Omit<HTMLProps<HTMLOrSVGElement>, 'size'>;

export interface Props extends SVGProp, WithThemeProp {
    /** Icon Size */
    size?: IconSizes;
    /** Icon color */
    color?: string;
    /** Margin for the Icon */
    margin?: string;
}
