import { StorageUtilities } from './types';

export const STORAGE_UTILITIES = (storage: Storage): StorageUtilities => ({
    getItem: key => {
        const value = storage.getItem(key);
        if (value) {
            try {
                return JSON.parse(value);
            } catch (error) {
                console.warn(`Error while parsing “${key}”:`, error);
                return value;
            }
        } else {
            return null;
        }
    },
    setItem: (key, value) => storage.setItem(key, JSON.stringify(value)),
    removeItem: key => storage.removeItem(key),
    clear: () => storage.clear()
});
