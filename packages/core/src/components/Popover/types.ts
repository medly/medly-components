import { HTMLProps } from '@medly-components/utils';
import Popup from './Popup';

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

export type PopoverContextType = [
    boolean /** Current open state */,
    React.Dispatch<React.SetStateAction<boolean>> /** Function to be called to toggle the open state */
];

export type StaticProps = {
    Popup: typeof Popup;
    Context: React.Context<PopoverContextType>;
};

export interface PopoverProps extends HTMLProps<HTMLDivElement> {
    /** Interaction type */
    interactionType?: InteractionType;
}
