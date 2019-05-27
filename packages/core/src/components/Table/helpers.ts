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

const getCumulativeTemplate = (config: ColumnConfig[]) => {
    const cumulativeSize = config.reduce((acc, curr) => acc.map((val, index) => val + parseInt(curr.size.match(/(\d+)/g)[index], 10)), [
        0,
        0
    ]);
    return `minmax(${cumulativeSize[0]}px, ${cumulativeSize[1]}fr)`;
};

export const getGridTemplateColumns = (config: ColumnConfig[]) =>
    config.reduce((acc, curr) => (curr.children ? `${acc} ${getCumulativeTemplate(curr.children)}` : `${acc} ${curr.size}`), ``);

export const changeSize = (width: number, field: string, columnConfig: ColumnConfig[]) => {
    const newColumnConfig = [...columnConfig];
    const splitField = field.split('.');
    const index = columnConfig.findIndex(col => col.field === splitField[0]);

    if (index >= 0) {
        const column = { ...newColumnConfig[index] };
        if (column.children && splitField[1]) {
            column.children = changeSize(width, splitField[1], column.children);
        } else {
            column.size = `minmax(${width}px, 1fr)`;
        }

        newColumnConfig[index] = column;
    }

    return newColumnConfig;
};
