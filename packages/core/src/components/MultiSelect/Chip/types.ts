import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';

type ButtonProps = Omit<HTMLProps<HTMLButtonElement>, 'type'>;

export interface Props extends ButtonProps, WithThemeProp {
    /** Chip label */
    label: string;
    /** Variant Types */
    variant?: 'outlined' | 'filled';
    /** Different States for chip */
    state?: 'default' | 'active' | 'error' | 'disabled';
    /** On click function */
    onClick?: () => void;
    /** On delete function */
    onClear?: () => void;
}
