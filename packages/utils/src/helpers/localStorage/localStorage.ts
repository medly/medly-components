import STORAGE_UTILITIES from '../storage';
import { StorageUtilities } from '../storage/types';

export const LOCAL_STORAGE: StorageUtilities = typeof window !== 'undefined' && STORAGE_UTILITIES(window?.localStorage);
