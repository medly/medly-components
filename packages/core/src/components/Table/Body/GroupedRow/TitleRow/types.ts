import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';
import { GridTemplateProps, TableProps } from '../../../types';

export type StyledProps = GridTemplateProps &
    HTMLProps<HTMLTableRowElement> &
    WithThemeProp & {
        isLoading?: boolean;
        tableWidth?: number;
        isRowSelected?: boolean;
        isRowExpanded: boolean;
        isRowExpandable: boolean;
        isRowSelectable: boolean;
        showRowWithCardStyle?: boolean;
        tableSize: TableProps['size'];
    };
export type TitleRowProps = Omit<HTMLProps<HTMLTableRowElement>, 'style' | 'data'> & {
    isRowExpanded?: boolean;
    isRowSelected?: boolean;
    data: { [key: string]: any };
    isRowIndeterminate?: boolean;
    onRowSelection?: (id: any) => void;
    isRowSelectionDisabled?: boolean;
    showShadowAfterFrozenElement: boolean;
};
