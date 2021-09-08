import STORAGE_UTILITIES from '../storage';
import { StorageUtilities } from '../storage/types';

export const SESSION_STORAGE: StorageUtilities = STORAGE_UTILITIES(typeof window === 'undefined' ? ({} as Storage) : window?.localStorage);
