import { ColumnConfig } from './types';

export const addSizeToColumnConfig = (columnConfigs: ColumnConfig[]): ColumnConfig[] => {
    return columnConfigs.map(config => {
        if (config.children) {
            const childCount = config.children.filter(child => child.hide).length;
            return { ...config, size: `minmax(${childCount * 150}px, 1fr)`, children: addSizeToColumnConfig(config.children) };
        }
        return { ...config, size: config.hide ? `minmax(0px, 0px)` : `minmax(150px, 1fr)` };
    });
};

const getCumulativeTemplate = (configs: ColumnConfig[]) => {
    const cumulativeSize = configs.reduce((acc, curr) => acc.map((val, index) => val + parseInt(curr.size.match(/(\d+)/g)[index], 10)), [
        0,
        0
    ]);
    return `minmax(${cumulativeSize[0]}px, ${cumulativeSize[1]}fr)`;
};

export const getGridTemplateColumns = (configs: ColumnConfig[]) =>
    configs.reduce((acc, curr) => (curr.children ? `${acc} ${getCumulativeTemplate(curr.children)}` : `${acc} ${curr.size}`), ``);

export const changeSize = (width: number, dottedField: string, columnConfigs: ColumnConfig[]) => {
    const newColumnConfigs = [...columnConfigs];
    const fields = dottedField.split('.');
    const index = columnConfigs.findIndex(config => config.field === fields[0]);

    if (index >= 0) {
        const config = { ...newColumnConfigs[index] };
        if (config.children && fields[1]) {
            config.children = changeSize(width, fields[1], config.children);
        } else {
            config.size = `minmax(${width}px, 1fr)`;
        }

        newColumnConfigs[index] = config;
    }

    return newColumnConfigs;
};
