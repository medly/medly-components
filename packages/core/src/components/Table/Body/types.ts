export interface TableBodyProps {
    setUniqueIds: React.Dispatch<React.SetStateAction<any[]>>;
    selectedRowIds: Array<number | string>;
    onRowSelection: (id: number | string | Array<number | string>) => void;
    showShadowAfterFrozenElement: boolean;
    setSelectAllDisableState: React.Dispatch<React.SetStateAction<boolean>>;
    onGroupedRowSelection: (id: number[] | string[]) => void;
}
