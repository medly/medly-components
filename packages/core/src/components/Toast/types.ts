import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';

export interface Props extends HTMLProps<HTMLDivElement> {
    /** Toast purpose */
    variant: 'success' | 'error' | 'info' | 'warning';
    /** Function to be called on close */
    onClose?: () => void;
}

export interface StyledProps extends WithThemeProp, Props {
    show?: boolean;
}
