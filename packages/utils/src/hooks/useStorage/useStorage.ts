import { useContext, useEffect, useState } from 'react';
import { COOKIE_STORAGE } from '../../helpers/cookieStorage';
import { LOCAL_STORAGE } from '../../helpers/localStorage';
import { SESSION_STORAGE } from '../../helpers/sessionStorage';
import { useIsMounted } from '../useIsMounted';
import { StorageConfig } from './Storage.context';
import { UseStorageOptions, UseStorageSetValue } from './types';

const storageObj = {
    localStorage: LOCAL_STORAGE,
    sessionStorage: SESSION_STORAGE,
    cookieStorage: COOKIE_STORAGE
};

/**
 * useStorage can be used to handle the browsers localStorage/sessionStorage/cookieStorage. Default storage is localStorage.
 *
 * @param {string} key name of the key
 * @param {UseStorageOptions<T>} [currOptions] An object that accepts type of storage and initial values
 *
 * @returns {[T, UseStorageSetValue<T>]} Array with first index as storedValue and second index as setValue function
 */
export const useStorage = <T>(key: string, currOptions?: UseStorageOptions<T>): [T, UseStorageSetValue<T>] => {
    const contextOption: UseStorageOptions<T> = useContext(StorageConfig),
        options = currOptions ?? contextOption,
        storage = storageObj[options.storage || 'localStorage'],
        { initialValue } = options,
        isMounted = useIsMounted();

    const readValue = (): T => {
        if (typeof window === 'undefined') {
            console.warn(`Tried setting ${options.storage} key “${key}” even though environment is not a client`);
            return initialValue as T;
        }

        const item = storage.getItem(key);
        if (item === null && initialValue !== undefined) {
            storage.setItem(key, initialValue);
            window?.dispatchEvent(new Event(`local-storage-${key}`));
            return initialValue;
        }
        return item;
    };

    const [storedValue, setStoredValue] = useState<T>(readValue);

    const setValue: UseStorageSetValue<T> = value => {
        if (typeof window === 'undefined') {
            console.warn(`Tried setting ${options.storage} key “${key}” even though environment is not a client`);
        }

        try {
            const newValue = value instanceof Function ? value(storedValue) : value;
            storage.setItem(key, newValue);
            isMounted.current && setStoredValue(newValue);
            window.dispatchEvent(new Event(`local-storage-${key}`));
        } catch (error) {
            console.warn(`Error setting localStorage key “${key}”:`, error);
        }
    };

    useEffect(() => {
        const handleStorageChange = () => isMounted.current && setStoredValue(readValue());

        window?.addEventListener(`local-storage-${key}`, handleStorageChange);
        return () => window.removeEventListener(`local-storage-${key}`, handleStorageChange);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [storedValue, setValue];
};
