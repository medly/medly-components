import { HTMLProps } from '@medly-components/utils';
import { TableColumnConfig } from '../../types';

export type TableCellStyledProps = {
    hidden?: boolean;
    frozen?: boolean;
    align?: 'left' | 'right' | 'center';
    wrapText?: boolean;
};

export type TableCellProps = TableCellStyledProps &
    HTMLProps<HTMLTableCellElement> & {
        data: any;
        rowId: any;
        config: TableColumnConfig;
        dottedFieldName: string;
        isLoading?: boolean;
        isRowClickDisabled?: boolean;
        addColumnMaxSize: (field: string, value: number) => void;
        as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
    };
