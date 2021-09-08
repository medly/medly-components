import { StorageUtilities } from '../storage/types';

export const COOKIE_STORAGE: StorageUtilities = {
    setItem: (key: string, value: unknown) => {
        if (typeof window !== 'undefined') document.cookie = `${key}=${JSON.stringify(value)}`;
    },
    getItem: (key: string) => {
        const value =
            typeof window !== 'undefined' &&
            document.cookie
                .split('; ')
                .find(row => row.startsWith(`${key}=`))
                ?.split('=')[1];
        if (value) {
            try {
                return JSON.parse(value);
            } catch (error) {
                console.warn(`Error while parsing “${key}”:`, error);
                return value;
            }
        }
        return null;
    },
    removeItem: (key: string) => {
        if (typeof window !== 'undefined') document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    },
    clear: () =>
        typeof window !== 'undefined' &&
        document.cookie
            .split('; ')
            .forEach(keyValue => (document.cookie = `${keyValue.split('=')[0]}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`))
};
