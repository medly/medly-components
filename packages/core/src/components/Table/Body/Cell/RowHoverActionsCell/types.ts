export type ObjectType = {
    [key: string]: any;
};

export type RowHoverActionsCellProps =  {
    rowHoverActions?: React.FC<{ rowData?: ObjectType; rowId?: any; }>;
    isRowHovered: boolean;
    data?: ObjectType;
    id?: any;
}

export type RowHoverActionsWrapperProps = {
    isRowHovered: boolean;
}
