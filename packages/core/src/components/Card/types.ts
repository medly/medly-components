import { HTMLProps, WithThemeProp } from '@medly-components/utils';

export type ItemsPosition = 'top' | 'bottom' | 'left' | 'right' | 'center';
export type Variants = 'outlined' | 'solid' | 'flat';
export type FlowDirection = 'vertical' | 'horizontal';

export interface Props extends HTMLProps<HTMLDivElement>, WithThemeProp {
    /** To be used if rendering like Link */
    to?: string;
    /** Card design */
    variant?: 'outlined' | 'solid' | 'flat';
    /** Direction of the children */
    flowDirection?: 'vertical' | 'horizontal';
    /** Separotor between each children */
    separator?: boolean;
    /** To be used to difine width/height of cards inside cards */
    flex?: number;
    /** Enable padding */
    withPadding?: boolean;
    /** Change the cursor pointer */
    clickable?: boolean;
    /** Alignment of the card content */
    alignItems?: 'top' | 'bottom' | 'left' | 'right' | 'center';
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Takes full height of the parent component */
    fullHeight?: boolean;
}
