import { ColumnConfig } from '../types';

export interface Props {
    columns: ColumnConfig[];
    onChange: (columns: ColumnConfig[]) => void;
}
