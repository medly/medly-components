export interface Props {
    setUniqueIds: React.Dispatch<React.SetStateAction<any[]>>;
    selectedRowIds: Array<number | string>;
    addColumnMaxSize: (field: string, value: number) => void;
    onRowSelection: (id: number | string | Array<number | string>) => void;
    showShadowAfterFrozenElement: boolean;
    setSelectAllDisableState: React.Dispatch<React.SetStateAction<boolean>>;
    onGroupedRowSelection: (id: number[] | string[]) => void;
}
