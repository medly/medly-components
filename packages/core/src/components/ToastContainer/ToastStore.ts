import { createEvent, createStore } from 'effector';
import { ToastVariants } from '../Toast/types';

export interface Toast {
    /** Auto generated id of the Toast */
    id?: number;
    /** Variant of the toast */
    variant: ToastVariants;
    /** Header of the toast */
    header?: string;
    /** Message of the toast */
    message?: string;
    /** Custom of the toast */
    icon?: React.SFC<any>;
    /** Toast will automatically will be close after this time */
    timer?: number;
}

export const addToast = createEvent<Toast>();
export const removeToast = createEvent<number>();

const toastStore = createStore<Toast[]>([])
    .on(addToast, (state, toast) => {
        const id = Math.floor(Math.random() * 100);
        setTimeout(() => removeToast(id), toast.timer || 5000);
        return [...state, { ...toast, id }];
    })
    .on(removeToast, (state, id) => state.filter(toast => toast.id !== id))
    .reset(removeToast);

export default toastStore;
