import { IconSizes } from '@medly-components/theme';
import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';

export type SVGProp = Omit<HTMLProps<HTMLOrSVGElement>, 'size'>;

export interface SvgIconProps extends SVGProp, WithThemeProp {
    /** Icon Size */
    size?: IconSizes;
    /** Icon color */
    color?: string;
    /** Show hover state if you want to use it as individual button */
    withHoverEffect?: boolean;
    /** Margin for the Icon */
    margin?: string;
}
