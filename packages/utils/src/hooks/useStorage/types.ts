import { Dispatch, SetStateAction } from 'react';

export type UseStorageSetValue<T> = Dispatch<SetStateAction<T>>;
export type UseStorageOptions<T> = { storage?: 'localStorage' | 'sessionStorage' | 'cookieStorage'; initialValue?: T };
