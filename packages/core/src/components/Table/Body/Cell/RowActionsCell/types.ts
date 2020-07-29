import { HTMLProps } from '@medly-components/utils';
import { TableProps } from '../../../types';

export type RowActionProps = HTMLProps<HTMLTableCellElement> & {
    isLoading?: boolean;
    isRowExpandable?: boolean;
    isRowSelectable?: boolean;
    isRowExpanded?: boolean;
    isRowSelected?: boolean;
    isRowSelectionDisabled?: boolean;
    showShadowAtRight?: boolean;
    tableSize?: TableProps['size'];
    onRowSelection?: () => void;
    onRowExpansionIconClick?: (event: any) => void;
};
