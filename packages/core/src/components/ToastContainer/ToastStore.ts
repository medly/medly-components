import { createEvent, createStore } from 'effector';
import { ToastProps } from '../Toast/types';

export type Toast = ToastProps & {
    /** Time after which toast will automatically removed */
    timer?: number;
};

export const addToast = createEvent<Omit<Toast, 'id'>>();
export const removeToast = createEvent<number>();
export const removeAllToasts = createEvent();

export const toastStore = createStore<Toast[]>([])
    .on(addToast, (state, toast) => {
        const array = new Uint32Array(1),
            id = window.crypto.getRandomValues(array)[0];
        setTimeout(() => removeToast(id), toast.timer || 5000);
        return [...state, { ...toast, id }];
    })
    .on(removeToast, (state, id) => state.filter(toast => toast.id !== id))
    .reset(removeAllToasts);
