import { IconSizes } from '@medly-components/theme';
import { HTMLProps, Omit } from '@medly-components/utils';

export type SVGProp = Omit<HTMLProps<SVGElement>, 'size' | 'sizes'>;

export interface SvgIconProps extends SVGProp {
    /** Icon Size */
    size?: IconSizes;
    /** Icon variants */
    variant?: 'solid' | 'flat';
    /** Icon color */
    iconColor?: string;
    /** Background color */
    bgColor?: string;
    /** Background color when we hover on it */
    hoverBgColor?: string;
    /** Icon color when we hover on it */
    hoverIconColor?: string;
    /** Set it true to show the hover effect */
    withHoverEffect?: boolean;
    /** Margin for the Icon */
    margin?: string;
    /** Fill opacity for the Icon */
    fillOpacity?: number;
}

export interface SvgIconTransientProps extends SVGProp {
    /** Icon Size */
    size?: IconSizes;
    /** Icon variants */
    variant?: 'solid' | 'flat';
    /** Icon color */
    $iconColor?: string;
    /** Background color */
    $bgColor?: string;
    /** Background color when we hover on it */
    $hoverBgColor?: string;
    /** Icon color when we hover on it */
    $hoverIconColor?: string;
    /** Set it true to show the hover effect */
    withHoverEffect?: boolean;
    /** Margin for the Icon */
    margin?: string;
    /** Fill opacity for the Icon */
    fillOpacity?: number;
}
