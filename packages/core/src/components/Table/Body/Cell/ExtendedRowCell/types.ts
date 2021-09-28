import { HTMLProps } from '@medly-components/utils';
import { TableProps } from '../../../types';

export type ExtendedRowCellProps = HTMLProps<HTMLTableCellElement> & {
    rowId: string;
    rowData: { [k: string]: any };
    isRowSelected?: boolean;
    isRowExpanded?: boolean;
    isRowClickDisabled?: boolean;
    showShadowAtRight?: boolean;
    tableSize: Required<TableProps>['size'];
    isGroupedTable?: boolean;
    expandedRowComponent: TableProps['expandedRowComponent'];
};
