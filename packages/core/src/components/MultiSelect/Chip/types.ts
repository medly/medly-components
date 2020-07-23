import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';

type ButtonProps = Omit<HTMLProps<HTMLButtonElement>, 'type' | 'label'>;

export interface Props extends ButtonProps, WithThemeProp {
    /** Chip label */
    label: number;
    /** Variant Types */
    variant?: 'outlined' | 'filled';
    /** Different States for chip */
    state?: 'default' | 'active' | 'error' | 'disabled';
    /** Test ID */
    testId?: string;
    /** On click function */
    onClick?: () => void;
    /** On delete function */
    onClear?: (label?: string) => void;
}
