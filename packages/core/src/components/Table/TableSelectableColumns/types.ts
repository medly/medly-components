import { Omit } from '@medly-components/utils';
import { ColumnConfig } from '../types';

export interface Props {
    columns: ColumnConfig[];
    fieldToChange: 'hide' | 'frozen' | 'sort';
    onChange: (columns: ColumnConfig[]) => void;
}
