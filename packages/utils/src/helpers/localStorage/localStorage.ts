import { STORAGE_UTILITIES } from '../storage';
import { StorageUtilities } from '../storage/types';

export const LOCAL_STORAGE: StorageUtilities = STORAGE_UTILITIES(typeof window === 'undefined' ? ({} as Storage) : window?.localStorage);
