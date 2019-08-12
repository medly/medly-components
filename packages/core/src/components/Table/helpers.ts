import { columnsWidth } from './columnsWidth';
import { ColumnConfig } from './types';

export const addSizeToColumnConfig = (columnConfigs: ColumnConfig[]): ColumnConfig[] => {
    return columnConfigs.map(config => {
        return config.children
            ? { ...config, children: addSizeToColumnConfig(config.children) }
            : { ...config, size: config.hide ? `minmax(0px, 0px)` : columnsWidth[config.formatter] };
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
        } else if (width < 50) {
            config.size = columnsWidth[config.formatter];
        } else if (width > 700) {
            config.size = config.size.replace(/(?<=minmax\().*(?=\,)/, `700px`);
        } else {
            config.size = config.size.replace(/(?<=minmax\().*(?=\,)/, `${width}px`);
        }

        newColumnConfigs[index] = config;
    }

    return newColumnConfigs;
};
