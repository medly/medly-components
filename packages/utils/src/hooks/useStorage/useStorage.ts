import { useContext, useEffect, useState } from 'react';
import COOKIE_STORAGE from '../../helpers/cookieStorage';
import LOCAL_STORAGE from '../../helpers/localStorage';
import SESSION_STORAGE from '../../helpers/sessionStorage';
import { StorageConfig } from './Storage.context';
import { UseStorageOptions, UseStorageSetValue } from './types';

const storageObj = {
    localStorage: LOCAL_STORAGE,
    sessionStorage: SESSION_STORAGE,
    cookieStorage: COOKIE_STORAGE
};

export const useStorage = <T>(key: string, currOptions?: UseStorageOptions<T>): [T, UseStorageSetValue<T>] => {
    const contextOption: UseStorageOptions<T> = useContext(StorageConfig),
        options = currOptions ?? contextOption,
        storage = storageObj[options.storage || 'localStorage'],
        initialValue = options.initialValue;

    const readValue = (): T => {
        if (typeof window === 'undefined') {
            console.warn(`Tried setting ${options.storage} key “${key}” even though environment is not a client`);
            return initialValue;
        }

        const item = storage.getItem(key);
        if (!item && typeof window !== 'undefined') {
            storage.setItem(key, initialValue);
            window.dispatchEvent(new Event(`local-storage-${key}`));
            return initialValue;
        }
        return item;
    };

    const [storedValue, setStoredValue] = useState<T>(readValue);

    const setValue: UseStorageSetValue<T> = value => {
        if (typeof window == 'undefined') {
            console.warn(`Tried setting ${options.storage} key “${key}” even though environment is not a client`);
        }

        try {
            storage.setItem(key, value);
            setStoredValue(value);
            typeof window !== 'undefined' && window.dispatchEvent(new Event(`local-storage-${key}`));
        } catch (error) {
            console.warn(`Error setting localStorage key “${key}”:`, error);
        }
    };

    useEffect(() => {
        const handleStorageChange = () => setStoredValue(readValue());

        if (typeof window !== 'undefined') {
            window.addEventListener(`local-storage-${key}`, handleStorageChange);
            return () => window.removeEventListener('local-storage', handleStorageChange);
        }
    }, []);

    return [storedValue, setValue];
};
