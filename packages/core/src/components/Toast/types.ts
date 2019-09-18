import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';

export interface Props extends HTMLProps<HTMLDivElement> {
    variant: 'success' | 'error' | 'info' | 'warning';
    onClose?: () => void;
}

export interface StyledProps extends WithThemeProp, Props {
    show?: boolean;
}
