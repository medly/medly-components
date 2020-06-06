import { HTMLProps, WithThemeProp } from '@medly-components/utils';

export type ToastVariants = 'success' | 'error' | 'info' | 'warning';

export interface Props extends Omit<HTMLProps<HTMLDivElement>, 'id'> {
    /** Id of the Toast */
    id?: number;
    /** Toast purpose */
    variant: ToastVariants;
    /** Icon to be shown in the toast */
    icon?: React.SFC<any>;
    /** Toast Header */
    header?: string;
    /** Toast message */
    message?: string;
}

export interface StyledProps extends WithThemeProp, Props {
    show?: boolean;
}
