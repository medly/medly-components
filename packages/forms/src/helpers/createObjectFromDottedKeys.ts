export const createObjectFromDottedKeys = (objectWithDottedKey: { [key: string]: any }): object => {
    const obj: { [key: string]: any } = {};

    Object.keys(objectWithDottedKey).forEach(key => {
        if (key.includes('.')) {
            const keys = key.split('.');
            const nestedObj = keys.slice(0, -1).reduce((acc, curr) => {
                if (!acc[curr]) acc[curr] = {};
                return acc[curr];
            }, obj);

            nestedObj[keys.slice(-1)[0]] = objectWithDottedKey[key];
        } else {
            obj[key] = objectWithDottedKey[key];
        }
    });

    return obj;
};
