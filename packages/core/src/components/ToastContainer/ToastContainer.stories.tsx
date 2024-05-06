import { FCC } from 'react';
import { Toast } from './ToastStore';
import { ToastContainerProps } from './types';

export const positions: ToastContainerProps['position'][] = [
    'top-start',
    'top',
    'top-end',
    'right',
    'left',
    'bottom-start',
    'bottom',
    'bottom-end'
];

export const AddToast: FCC<Toast> = () => null;
AddToast.defaultProps = {
    timer: 5000
};
