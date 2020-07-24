import { HTMLProps } from '@medly-components/utils';
import { TableProps } from '../../../types';

export type ExtendedRowCellProps = HTMLProps<HTMLTableCellElement> & {
    rowId: string;
    rowData: { [k: string]: any };
    isRowSelected: boolean;
    isRowClickDisabled: boolean;
    showShadowAtRight: boolean;
    tableSize: TableProps['size'];
    expandedRowComponent: TableProps['expandedRowComponent'];
};
