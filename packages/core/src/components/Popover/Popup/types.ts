import { HTMLProps } from '@medly-components/utils';
import { Placement } from '../types';

export interface PopoverPopupProps extends HTMLProps<HTMLDivElement> {
    /** Placement of the popup */
    placement?: Placement;
    /** Distance from content */
    distance?: string;
    /** Background Color */
    bgColor?: string;
    /** Set it true to show the arrow */
    withArrow?: boolean;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Takes full height of the parent component */
    fullHeight?: boolean;
}

export type StyledPopoverPopupProps = PopoverPopupProps & {
    placement: Placement;
};
