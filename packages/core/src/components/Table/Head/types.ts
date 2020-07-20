import { TableColumnConfig } from '../types';

export interface Props {
    setColumns: React.Dispatch<React.SetStateAction<TableColumnConfig[]>>;
    isEachRowSelected?: boolean;
    isAnyRowSelected?: boolean;
    isSelectAllDisable?: boolean;
    onSelectAllClick?: (id: number) => void;
    maxColumnSizes: { [k: string]: number };
    showShadowAtBottom: boolean;
    showShadowAfterFrozenElement?: boolean;
}
