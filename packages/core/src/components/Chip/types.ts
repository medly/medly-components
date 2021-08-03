import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';

type ButtonProps = Omit<HTMLProps<HTMLButtonElement>, 'type'>;

export interface StyledProps extends ButtonProps, WithThemeProp {
    /** Chip design */
    variant?: 'solid' | 'flat' | 'outlined';
    /** Button colors */
    color?: string;
    /** To be used to render any component as Chip */
    as?: any;
    /** To be used if rendering like Link */
    to?: string;
}

export interface ChipProps extends StyledProps {
    /** Chip label */
    label: string;
    /** On click function */
    onClick?: () => void;
    /** On delete function */
    onDelete?: () => void;
}
