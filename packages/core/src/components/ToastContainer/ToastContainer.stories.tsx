import { FC } from 'react';
import { Toast } from './ToastStore';
import { ToastContainerProps } from './types';

export const positions: ToastContainerProps['position'][] = ['top-start', 'top', 'top-end', 'right', 'left', 'bottom-start', 'bottom', 'bottom-end'];

export const AddToast: FC<Toast> = () => null;
AddToast.defaultProps = {
    timer: 5000
};
