import { HTMLProps } from '@medly-components/utils';
import { Data, TableColumnConfig, TableProps } from '../../types';

export type TableCellStyledProps = {
    hidden?: boolean;
    frozen?: boolean;
    align?: 'left' | 'right' | 'center';
    wrapText?: boolean;
    tableSize?: TableProps['size'];
};

export type TableCellProps = TableCellStyledProps &
    HTMLProps<HTMLTableCellElement> & {
        data: any;
        rowId: any;
        rowData: Data;
        config: TableColumnConfig;
        dottedFieldName?: string;
        isLoading?: boolean;
        isRowClickDisabled?: boolean;
        tableSize?: TableProps['size'];
        addColumnMaxSize?: (field: string, value: number) => void;
        as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
    };
