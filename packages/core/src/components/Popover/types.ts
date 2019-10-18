import { HTMLProps, WithThemeProp } from '@medly-components/utils';

export type Placement =
    | 'top-start'
    | 'top'
    | 'top-end'
    | 'right-start'
    | 'right'
    | 'right-end'
    | 'bottom-end'
    | 'bottom'
    | 'bottom-start'
    | 'left-end'
    | 'left'
    | 'left-start';

export type InteractionType = 'click' | 'hover';

export interface PopoverWrapperProps extends HTMLProps<HTMLDivElement> {
    /** Show popover based on this interaction type */
    interactionType?: InteractionType;
    /** Placement of the popover */
    placement?: Placement;
    /** Function to be called on  outer click of the wrapper */
    onOuterClick?: () => void;
}

export interface PopoverProps extends HTMLProps<HTMLDivElement> {
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Takes full height of the parent component */
    fullHeight?: boolean;
}
