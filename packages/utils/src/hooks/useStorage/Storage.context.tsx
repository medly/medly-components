import { createContext } from 'react';
import { UseStorageOptions } from './types';

export const StorageConfig = createContext<UseStorageOptions<any>>({ storage: 'localStorage' });
