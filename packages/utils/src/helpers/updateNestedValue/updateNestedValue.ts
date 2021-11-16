export const updateNestedValue = <T extends Record<string, any>>(obj: T, key: string, value: any): T => {
    const keys = key.split(/\.(.+)/);
    if (keys.length === 1) {
        return { ...obj, [key]: value } as T;
    } else if (keys.length > 1) {
        return {
            ...obj,
            [keys[0]]: {
                ...obj[keys[0]],
                ...updateNestedValue(obj[keys[0]], keys[1], value)
            }
        } as T;
    } else {
        return value;
    }
};
