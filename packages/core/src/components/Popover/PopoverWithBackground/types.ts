import { HTMLProps } from '@medly-components/utils';
import { Placement } from '../types';

export interface Props extends HTMLProps<HTMLDivElement> {
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Takes full height of the parent component */
    fullHeight?: boolean;
    /** Function to be called on  outer click of the wrapper */
    placement?: Placement;
}
