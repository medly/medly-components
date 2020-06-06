import { HTMLProps, WithThemeProp } from '@medly-components/utils';

export interface Props extends HTMLProps<HTMLDivElement> {
    /** Toast purpose */
    variant: 'success' | 'error' | 'info' | 'warning';
    /** Function to be called on close */
    onClose?: () => void;
    heading?: string;
    message?: string;
}

export interface StyledProps extends WithThemeProp, Props {
    show?: boolean;
}
