import { columnsWidth } from './columnsWidth';
import { rowActionsColumnConfig } from './constants';
import { TableColumnConfig, TableProps } from './types';

export const addSizeToColumnConfig = (columnConfigs: TableColumnConfig[]): TableColumnConfig[] => {
    return columnConfigs.map(config => {
        return config.children
            ? { ...config, children: addSizeToColumnConfig(config.children) }
            : { ...config, size: config.hidden ? `minmax(0px, 0px)` : columnsWidth[config.formatter] };
    });
};

export const getUpdatedColumns = (
    columnConfigs: TableColumnConfig[],
    isSelectable?: boolean,
    isExpandable?: boolean,
    size?: TableProps['size']
): TableColumnConfig[] => [
    ...(isSelectable || isExpandable
        ? [
              {
                  ...rowActionsColumnConfig,
                  size:
                      isSelectable && isExpandable
                          ? `minmax(${size === 'L' ? '11.6rem' : '84px'}, 0.1fr)`
                          : `minmax(${size === 'L' ? '6.4rem' : '48px'}, 0.1fr)`
              }
          ]
        : []),
    ...addSizeToColumnConfig(columnConfigs)
];

const getCumulativeTemplate = (configs: TableColumnConfig[]): string => {
    const cumulativeSize = configs.reduce(
        (acc, curr) =>
            acc.map(
                (val, index) =>
                    val +
                    (curr.children
                        ? Number(getCumulativeTemplate(curr.children).match(/\d+(\.\d*)?/g)[index])
                        : Number(curr.size.match(/\d+(\.\d*)?/g)[index]))
            ),
        [0, 0]
    );
    const visibleChildrenCount = configs.filter(({ hidden }) => !hidden).length;
    return `minmax(${cumulativeSize[0]}px, ${visibleChildrenCount === 1 ? 1 : cumulativeSize[1]}fr)`;
};

export const getGridTemplateColumns = (configs: TableColumnConfig[]) => {
    const visibleChildren = configs.filter(({ hidden }) => !hidden),
        visibleChildrenCount = visibleChildren.length;

    const size = configs.reduce(
        (acc, curr) =>
            curr.children
                ? `${acc} ${getCumulativeTemplate(curr.children)}`
                : visibleChildrenCount === 1 && visibleChildren[0].field === curr.field
                ? `${acc} minmax(${Number(visibleChildren[0].size.match(/\d+(\.\d*)?/g)[0])}px, 1fr)`
                : `${acc} ${curr.size}`,
        ``
    );
    return size;
};

export const changeSize = (width: number, dottedField: string, columnConfigs: TableColumnConfig[]) => {
    const newColumnConfigs = [...columnConfigs],
        [currField, nextField] = dottedField.split(/\.(.+)/),
        index = columnConfigs.findIndex(config => config.field === currField);

    if (index >= 0) {
        const config = { ...newColumnConfigs[index] };
        if (config.children && nextField) {
            config.children = changeSize(width, nextField, config.children);
        } else if (width < 84) {
            config.size = columnsWidth[config.formatter];
        } else if (width > 900) {
            config.size = config.size.replace(/(.*\()(.*)(,.*)/, `$1700px$3`);
        } else {
            config.size = config.size.replace(/(.*\()(.*)(,.*)/, `$1${width}px$3`);
        }

        newColumnConfigs[index] = config;
    }

    return newColumnConfigs;
};
