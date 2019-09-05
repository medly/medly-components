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
    const cumulativeSize = configs.reduce((acc, curr) => acc.map((val, index) => val + Number(curr.size.match(/\d+(\.\d*)?/g)[index])), [
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
        } else if (width < 75) {
            config.size = columnsWidth[config.formatter];
        } else if (width > 900) {
            config.size = config.size.replace(/(.*\()(.*)(\,.*)/, `$1700px$3`);
        } else {
            config.size = config.size.replace(/(.*\()(.*)(\,.*)/, `$1${width}px$3`);
        }

        newColumnConfigs[index] = config;
    }

    return newColumnConfigs;
};

export const getMaxColumnSizes = (data: object[], columns: ColumnConfig[], hiddenDivRef: React.MutableRefObject<any>) => {
    const maxSizeObj = {};

    const rows = (rowData: any, configs: ColumnConfig[], field = '') => {
        configs.forEach(config => {
            const fieldName = `${field && `${field}.`}${config.field}`;

            if (hiddenDivRef.current) {
                if (!config.children && hiddenDivRef.current) {
                    if (rowData[config.field]) {
                        hiddenDivRef.current.innerHTML = rowData[config.field];
                        const currentSize = hiddenDivRef.current.clientWidth;
                        // @ts-ignore
                        const maxSize = maxSizeObj[fieldName] || 0;
                        // @ts-ignore
                        if (currentSize > maxSize) maxSizeObj[fieldName] = currentSize;
                        // @ts-ignore
                    } else maxSizeObj[fieldName] = 0;
                } else rows(rowData[config.field], config.children, config.field);
            }
        });
    };

    data.forEach(rowData => rows(rowData, columns));

    return maxSizeObj;
};
