import { HTMLProps } from '@medly-components/utils';
import { TableColumnConfig } from '../../types';

export type TableCellStyledProps = {
    hidden?: boolean;
    frozen?: boolean;
    align?: 'left' | 'right' | 'center';
    isRowSelectionCell?: boolean;
    wrapText?: boolean;
    showShadowAtRight?: boolean;
    showSelectedRowBorder?: boolean;
};

export type TableCellProps = TableCellStyledProps &
    HTMLProps<HTMLTableCellElement> & {
        data: any;
        rowId: any;
        config: TableColumnConfig;
        dottedFieldName: string;
        isLoading?: boolean;
        isRowSelected?: boolean;
        isRowClickDisabled?: boolean;
        isRowSelectionDisabled?: boolean;
        showShadowAtRight?: boolean;
        onRowSelection?: (id: number) => void;
        addColumnMaxSize: (field: string, value: number) => void;
        as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
    };
