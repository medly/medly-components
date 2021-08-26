import { createContext } from 'react';
import { UseStorageOptions } from './types';

export const StorageConfig = createContext<UseStorageOptions>({ storage: 'localStorage' });
