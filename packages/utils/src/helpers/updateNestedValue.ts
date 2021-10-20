export const updateNestedValue = (obj: { [k: string]: any }, key: string, value: any): Record<string, unknown> => {
    const keys = key.split(/\.(.+)/);
    if (keys.length === 1) {
        return { ...obj, [key]: value };
    } else if (keys.length > 1) {
        return {
            ...obj,
            [keys[0]]: {
                ...obj[keys[0]],
                ...updateNestedValue(obj[keys[0]], keys[1], value)
            }
        };
    } else {
        return value;
    }
};
