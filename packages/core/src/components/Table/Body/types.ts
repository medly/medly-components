import { Keybindings } from '../types';

export interface TableBodyProps {
    keybindings: Keybindings;
    setUniqueIds: React.Dispatch<React.SetStateAction<any[]>>;
    selectedRowIds: Array<number | string>;
    onRowSelection: (id: number | string) => void;
    showShadowAfterFrozenElement: boolean;
    setSelectAllDisableState: React.Dispatch<React.SetStateAction<boolean>>;
    onGroupedRowSelection: (id: number[] | string[]) => void;
}
