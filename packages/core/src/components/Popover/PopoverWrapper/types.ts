import { HTMLProps, Omit } from '@medly-components/utils';

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

export interface Props extends Omit<HTMLProps<HTMLDivElement>, 'onChange'> {
    /** Pass true to show popover child */
    showPopover?: boolean;
    /** Placement of the popover */
    placement?: Placement;
    /** Function to be called on  outer click of the wrapper */
    onOuterClick?: () => void;
}
