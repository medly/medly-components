import { SFC } from 'react';
import { Toast } from './ToastStore';
import { Props } from './types';

export const positions: Props['position'][] = ['top-start', 'top', 'top-end', 'right', 'left', 'bottom-start', 'bottom', 'bottom-end'];

export const AddToast: SFC<Toast> = () => null;
AddToast.defaultProps = {
    timer: 5000
};
