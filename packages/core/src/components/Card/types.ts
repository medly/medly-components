import { HTMLProps } from '@medly-components/utils';

export type ItemsPosition = 'top' | 'bottom' | 'left' | 'right' | 'center';
export type Variants = 'solid' | 'flat';
export type FlowDirection = 'vertical' | 'horizontal';

export interface CardProps extends HTMLProps<HTMLDivElement> {
    /** Use to render component as any HTML tag */
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
    /** Use for rendering like Link */
    to?: string;
    /** Card design */
    variant?: 'solid' | 'flat';
    /** Use the card as a flex container of a normal block */
    display?: 'block' | 'flex';
    /** Direction of the children */
    flowDirection?: 'vertical' | 'horizontal';
    /** A separator between each child */
    separator?: boolean;
    /** Use to define the width or height of cards inside the cards */
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
