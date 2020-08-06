import { HTMLProps } from '@medly-components/utils';
import { TableProps } from '../../../types';

export type RowActionProps = HTMLProps<HTMLTableCellElement> & {
    isLoading?: boolean;
    isGroupedTable?: boolean;
    isRowExpandable?: boolean;
    isRowSelectable?: boolean;
    isRowExpanded?: boolean;
    isRowSelected?: boolean;
    isRowIndeterminate?: boolean;
    isRowSelectionDisabled?: boolean;
    showShadowAtRight?: boolean;
    tableSize?: TableProps['size'];
    onRowSelection?: (id: any) => void;
    onRowExpansionIconClick?: (event: any) => void;
};
