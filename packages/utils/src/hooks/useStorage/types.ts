import { Dispatch, SetStateAction } from 'react';

export type UseStorageSetValue<T> = Dispatch<SetStateAction<T>>;
export type UseStorageOptions = { storage: 'localStorage' | 'sessionStorage' | 'cookieStorage' };
