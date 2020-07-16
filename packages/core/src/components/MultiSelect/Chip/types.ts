import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';

type ButtonProps = Omit<HTMLProps<HTMLButtonElement>, 'type'>;

export interface Props extends ButtonProps, WithThemeProp {
    /** Chip label */
    label: string;
    /** On click function */
    onClick?: () => void;
    /** On delete function */
    onClear?: () => void;
}
