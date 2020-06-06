import { createEvent, createStore } from 'effector';

type Toast = {
    id?: number;
    header?: number;
    message?: string;
};

export const addToast = createEvent();
const removeToast = createEvent();

const toast = createStore<Toast[]>([])
    .on(addToast, (state, toast: Toast) => [...state, toast])
    .on(removeToast, (state, id) => state.filter(toast => toast !== id))
    .reset(removeToast);

export default toast;
