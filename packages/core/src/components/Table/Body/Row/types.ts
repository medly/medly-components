import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';
import { GridTemplateProps } from '../../types';

export type StyledProps = GridTemplateProps &
    HTMLProps<HTMLTableRowElement> &
    WithThemeProp & {
        isSelected?: boolean;
    };
export type Props = Omit<HTMLProps<HTMLTableRowElement>, 'style' | 'data'> & {
    data: { [key: string]: any };
    selectedRowIds?: number[];
    addColumnMaxSize: (field: string, value: number) => void;
    onRowSelection?: (id: number) => void;
    showShadowAfterFrozenElement?: boolean;
};
