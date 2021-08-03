import { HTMLProps, Omit } from '@medly-components/utils';
import { ButtonProps } from '../Button/types';

export type ToastVariants = 'success' | 'error' | 'info' | 'warning';

export type ToastProps = Omit<HTMLProps<HTMLDivElement>, 'id' | 'action'> & {
    /** Id of the Toast */
    id?: number;
    /** Toast purpose */
    variant: ToastVariants;
    /** Icon to be shown in the toast */
    icon?: React.FC<any>;
    /** Toast Header */
    header?: string;
    /** Toast message */
    message?: string;
    /** Additional action if you want to add */
    action?: { label: string } & Omit<ButtonProps, 'variant' | 'size'>;
    /** Set it true if you are using it without toast container and want to make it full width */
    fullWidth?: boolean;
};
