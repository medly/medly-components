import { FontVariants } from '@medly-components/theme';
import { MaxColumnSizes, TableColumnConfig } from '../types';
export interface Props {
    setColumns: React.Dispatch<React.SetStateAction<TableColumnConfig[]>>;
    areAllRowsSelected?: boolean;
    isAnyRowSelected?: boolean;
    isSelectAllDisable?: boolean;
    onSelectAllClick?: (id: number) => void;
    maxColumnSizes: MaxColumnSizes;
    showShadowAtBottom: boolean;
    showShadowAfterFrozenElement?: boolean;
    fontVariant?: FontVariants;
}
