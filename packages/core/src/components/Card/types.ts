import { HTMLProps, WithThemeProp } from '@medly-components/utils';

export type ItemsPosition = 'top' | 'bottom' | 'left' | 'right' | 'center';
export type Variants = 'outlined' | 'solid' | 'flat';
export type FlowDirection = 'vertical' | 'horizontal';

export interface Props extends HTMLProps<HTMLDivElement>, WithThemeProp {
    to?: string;
    variant?: Variants;
    flowDirection?: FlowDirection;
    separator?: boolean;
    flex?: number;
    withPadding?: boolean;
    clickable?: boolean;
    alignItems?: ItemsPosition;
    fullWidth?: boolean;
    fullHeight?: boolean;
}
