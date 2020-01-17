import { HTMLProps } from '@medly-components/utils';

export interface Props extends HTMLProps<HTMLDivElement> {
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Takes full height of the parent component */
    fullHeight?: boolean;
}
