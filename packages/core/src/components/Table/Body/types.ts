export interface Props {
    selectedRowIds?: number[];
    addColumnMaxSize: (field: string, value: number) => void;
    onRowSelection?: (id: number) => void;
    onRowClick?: (rowData: object) => void;
    showShadowAfterFrozenElement?: boolean;
}
