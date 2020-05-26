export const createDottedKeyObject = (obj: { [key: string]: any }, parentKey = ''): { [key: string]: any } => {
    let newObj: { [key: string]: any } = {};

    Object.keys(obj).forEach(key => {
        const keyName = parentKey ? `${parentKey}.${key}` : key;

        if (typeof obj[key] === 'object' && !(obj[key] instanceof Array)) {
            newObj = { ...newObj, ...createDottedKeyObject(obj[key], keyName) };
        } else {
            newObj[keyName] = obj[key];
        }
    });

    return newObj;
};
