/* eslint-disable @typescript-eslint/no-explicit-any */
export type StorageUtilities = {
    getItem: (key: string) => any | null;
    setItem: (key: string, value: any) => void;
    removeItem: (key: string) => void;
    clear: () => void;
};
