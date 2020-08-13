import { HTMLProps } from '@medly-components/utils';
import { Placement } from '../types';

export interface PopupProps extends HTMLProps<HTMLDivElement> {
    /** distance from content */
    distance?: string;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Takes full height of the parent component */
    fullHeight?: boolean;
    /** Placement of the popup */
    placement?: Placement;
}
