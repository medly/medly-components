import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';
import { GridTemplateProps } from '../../../types';

export type StyledProps = GridTemplateProps &
    HTMLProps<HTMLTableRowElement> &
    WithThemeProp & {
        isRowExpanded?: boolean;
    };
export type Props = Omit<HTMLProps<HTMLTableRowElement>, 'style' | 'data'> & {
    isRowExpanded?: boolean;
    data: { [key: string]: any };
    selectedRowIds?: Array<any>;
    onRowSelection?: (id: any) => void;
    showShadowAfterFrozenElement?: boolean;
    addColumnMaxSize: (field: string, value: number) => void;
};
