import { HTMLProps, Omit } from '@medly-components/utils';
import type { FC } from 'react';
import { ButtonProps } from '../Button/types';

export type ToastVariants = 'success' | 'error' | 'info' | 'warning';

export type ToastProps = {
    /** Toast ID */
    id: number;
    /** Toast purpose */
    variant: ToastVariants;
    /** Icon to be shown in the toast */
    icon?: FC<any>;
    /** Toast header */
    header?: string | React.ReactElement<any>;
    /** Toast message */
    message?: string | React.ReactElement<any>;
    /** Additional action if you want to add */
    action?: { label: string } & Omit<ButtonProps, 'variant' | 'size'>;
    /** Set it true if you are using it without toast container and want to make it full width */
    fullWidth?: boolean;
    /** Hide close icon */
    hideCloseIcon?: boolean;
};

export type ToastComponentProps = Omit<HTMLProps<HTMLDivElement>, 'id' | 'action'> & ToastProps;

export type StyledToastProps = Omit<ToastProps, 'id'>;
