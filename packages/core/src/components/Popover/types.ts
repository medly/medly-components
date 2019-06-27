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
    interactionType?: InteractionType;
    placement?: Placement;
    onOuterClick?: () => void;
}

export interface PopoverProps {
    fullWidth?: boolean;
    fullHeight?: boolean;
}
