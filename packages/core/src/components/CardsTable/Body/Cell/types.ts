import { ColumnConfig } from "../../types";

export interface Props {
    data: any;
    column: ColumnConfig,
    rowId: any;
    isRowClickDisabled?: boolean;
}
