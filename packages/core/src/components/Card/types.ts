import { HTMLProps, WithThemeProp } from '@medly-components/utils';

export type ItemsPosition = 'top' | 'bottom' | 'left' | 'right' | 'center';
export type Variants = 'solid' | 'flat';
export type FlowDirection = 'vertical' | 'horizontal';

export interface CardProps extends HTMLProps<HTMLDivElement>, WithThemeProp {
    /** To be used if rendering like Link */
    to?: string;
    /** Card design */
    variant?: 'solid' | 'flat';
    /** Use card as flex container of normal block */
    display?: 'block' | 'flex';
    /** Direction of the children */
    flowDirection?: 'vertical' | 'horizontal';
    /** Separator between each children */
    separator?: boolean;
    /** To be used to define width/height of cards inside cards */
    flex?: number;
    /** Enable padding */
    withoutPadding?: boolean;
    /** Alignment of the card content */
    alignItems?: 'top' | 'bottom' | 'left' | 'right' | 'center';
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Takes full height of the parent component */
    fullHeight?: boolean;
    /** Min width in px/rem/% (1rem = 10px)*/
    minWidth?: string;
    /** Min width in px/rem/% (1rem = 10px) */
    minHeight?: string;
}
