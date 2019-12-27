import { ColumnConfig } from '../types';

const changeFieldValue = (dottedField: string, configs: ColumnConfig[], state = false, fieldToChange: string): ColumnConfig[] => {
    return configs.map(config => {
        if (!dottedField.includes('.') && config.field === dottedField) return { ...config, [fieldToChange]: state };
        if (config.field === dottedField.split('.')[0] && config.children) {
            return {
                ...config,
                children: changeFieldValue(dottedField.substring(dottedField.indexOf('.') + 1), config.children, state, fieldToChange)
            };
        }
        return config;
    });
};

export default changeFieldValue;
